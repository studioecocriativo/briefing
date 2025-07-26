document.getElementById('briefingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = new FormData(this);
  const nome = form.get('nome');
  const email = form.get('email');
  const telefone = form.get('telefone');
  const tipo = form.get('tipo');
  const descricao = form.get('descricao');
  const objetivo = form.get('objetivo');
  const publico = form.get('publico');
  const referencias = form.get('referencias');
  const cor1 = form.get('cor1');
  const cor2 = form.get('cor2');
  const cor3 = form.get('cor3');
  const extra = form.get('extra');

  const mensagem = `
*BRIEFING | Studio EcoCriativo*
🧑 Nome: ${nome}
📧 E-mail: ${email}
📱 WhatsApp: ${telefone}
🎨 Projeto: ${tipo}

📝 Descrição:
${descricao}

🎯 Objetivo:
${objetivo}

👥 Público-alvo:
${publico}

📌 Inspirações:
${referencias}

🎨 Cores escolhidas:
${cor1}, ${cor2}, ${cor3}

💬 Informações extras:
${extra}
  `;

  const url = `https://wa.me/5512996500827?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
});