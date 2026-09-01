"use server";

import nodemailer from "nodemailer";

/**
 * Server Action para processar o envio do formulário de contato.
 * Esta função recebe os dados do formulário e usa nodemailer para enviar.
 */
export async function submitContactForm(formData: FormData) {
  try {
    // Extraindo os campos do FormData
    const fullName = formData.get("fullName") || "N/A";
    const email = formData.get("email") || "N/A";
    const phone = formData.get("phone") || "N/A";
    const eventType = formData.get("eventType") || "N/A";
    const eventTime = formData.get("eventTime") || "N/A";
    const theme = formData.get("theme") || "N/A";
    const location = formData.get("location") || "N/A";
    const eventDate = formData.get("eventDate") || "N/A";
    const budget = formData.get("budget") || "N/A";
    const guestCount = formData.get("guestCount") || "N/A";
    const about = formData.get("about") || "N/A";
    const referral = formData.get("referral") || "N/A";

    // Serviços adicionais (podem ser múltiplos)
    const additionalServices = formData.getAll("additionalServices") as string[];
    const servicesString = additionalServices.length > 0 ? additionalServices.join(", ") : "Nenhum selecionado";

    // Imagens de referência (files)
    const files = formData.getAll("references") as File[];
    const attachments = [];
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

    for (const file of files) {
      if (file.size > 0) {
        if (file.size > MAX_FILE_SIZE) {
          return { success: false, message: `A imagem ${file.name} excede o limite de 5MB. Por favor, selecione uma imagem menor.` };
        }
        
        const buffer = Buffer.from(await file.arrayBuffer());
        attachments.push({
          filename: file.name,
          content: buffer,
        });
      }
    }

    // Basic required fields validation
    if (fullName === "N/A" || email === "N/A" || phone === "N/A") {
       return { success: false, message: "Por favor, preencha todos os campos obrigatórios." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.toString())) {
       return { success: false, message: "Por favor, insira um endereço de e-mail válido." };
    }

    console.log("Processando formulário para:", fullName);

    // Configurando o transportador de E-mail (Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Construção do Layout HTML bem organizado
    const htmlEmail = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
        <h2 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 10px; text-transform: uppercase; letter-spacing: 2px;">
          Novo Pedido de Evento — NOAME
        </h2>
        
        <p>Recebeu um novo formulário de contacto com os seguintes detalhes:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="background-color: #fcfaf2;">
            <td style="padding: 12px; border: 1px solid #eee; font-weight: bold; width: 40%;">Nome Completo:</td>
            <td style="padding: 12px; border: 1px solid #eee;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #eee; font-weight: bold;">E-mail:</td>
            <td style="padding: 12px; border: 1px solid #eee;">${email}</td>
          </tr>
          <tr style="background-color: #fcfaf2;">
            <td style="padding: 12px; border: 1px solid #eee; font-weight: bold;">Telefone:</td>
            <td style="padding: 12px; border: 1px solid #eee;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #eee; font-weight: bold;">Tipo de Evento:</td>
            <td style="padding: 12px; border: 1px solid #eee;">${eventType}</td>
          </tr>
          <tr style="background-color: #fcfaf2;">
            <td style="padding: 12px; border: 1px solid #eee; font-weight: bold;">Horário do Evento:</td>
            <td style="padding: 12px; border: 1px solid #eee;">${eventTime}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #eee; font-weight: bold;">Tema / Paleta:</td>
            <td style="padding: 12px; border: 1px solid #eee;">${theme}</td>
          </tr>
          <tr style="background-color: #fcfaf2;">
            <td style="padding: 12px; border: 1px solid #eee; font-weight: bold;">Local/Venue:</td>
            <td style="padding: 12px; border: 1px solid #eee;">${location}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #eee; font-weight: bold;">Data do Evento:</td>
            <td style="padding: 12px; border: 1px solid #eee;">${eventDate}</td>
          </tr>
          <tr style="background-color: #fcfaf2;">
            <td style="padding: 12px; border: 1px solid #eee; font-weight: bold;">Orçamento:</td>
            <td style="padding: 12px; border: 1px solid #eee;">${budget}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #eee; font-weight: bold;">Nº Convidados:</td>
            <td style="padding: 12px; border: 1px solid #eee;">${guestCount}</td>
          </tr>
          <tr style="background-color: #fcfaf2;">
            <td style="padding: 12px; border: 1px solid #eee; font-weight: bold;">Serviços Adicionais:</td>
            <td style="padding: 12px; border: 1px solid #eee; color: #d4af37; font-weight: bold;">${servicesString}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #eee; font-weight: bold;">Origem:</td>
            <td style="padding: 12px; border: 1px solid #eee;">${referral}</td>
          </tr>
        </table>

        <div style="margin-top: 30px; background-color: #fcfaf2; padding: 20px; border-left: 4px solid #d4af37;">
          <h3 style="margin-top: 0; color: #d4af37; text-transform: uppercase; font-size: 14px;">Mensagem / Descrição:</h3>
          <p style="white-space: pre-wrap; font-size: 15px; line-height: 1.6;">${about}</p>
        </div>

        ${attachments.length > 0 ? `<p style="margin-top: 20px; font-size: 12px; color: #666;">📎 Este e-mail contém ${attachments.length} imagem(ns) de referência em anexo.</p>` : ""}
      </div>
    `;

    // Enviar o e-mail
    await transporter.sendMail({
      from: `"NOAME Website" <${process.env.EMAIL_USER}>`,
      to: "kevinpale059@gmail.com",
      replyTo: email as string,
      subject: `NOVO EVENTO: ${eventType} - ${fullName}`,
      html: htmlEmail,
      attachments: attachments,
    });

    return { success: true, message: "Sua solicitação foi enviada com sucesso! A nossa equipa entrará em contacto em breve." };
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
    return { success: false, message: "Ocorreu um erro técnico ao tentar contactar-nos. Por favor, tente novamente mais tarde." };
  }
}

