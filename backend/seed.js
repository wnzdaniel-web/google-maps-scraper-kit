const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.lead.deleteMany();
  
  const leads = [
    {
      nome: 'Padaria e Confeitaria Bella Vista',
      segmento: 'Alimentação',
      categoria: 'Padaria',
      telefone: '(11) 3256-7890',
      website: '',
      instagram: '@bellavistapadaria',
      endereco: 'R. Augusta, 1200 - Consolação, São Paulo - SP',
      bairro: 'Consolação',
      cidade: 'São Paulo',
      estado: 'SP',
      avaliacao: 4.7,
      quantidade_avaliacoes: 310,
      url_google_maps: 'https://www.google.com/maps/place/Padaria+Bella+Vista',
      score: 92,
      score_justificativa: 'Sem website cadastrado, possui Instagram, alta contagem de avaliações.',
      status_crm: 'Novo'
    },
    {
      nome: 'Oficina Mecânica - DLN',
      segmento: 'Automotivo',
      categoria: 'Oficina mecânica',
      telefone: '(16) 98244-4933',
      website: '',
      instagram: '@oficinadln_franca',
      endereco: 'R. Floriano Peixoto, 1034 - Centro, Franca - SP',
      bairro: 'Centro',
      cidade: 'Franca',
      estado: 'SP',
      avaliacao: 4.8,
      quantidade_avaliacoes: 42,
      url_google_maps: 'https://www.google.com/maps/place/Oficina+Mec%C3%A2nica+-+DLN',
      score: 88,
      score_justificativa: 'Sem website, forte engajamento local.',
      status_crm: 'Qualificado'
    },
    {
      nome: 'Dr. Carlos Odontologia',
      segmento: 'Saúde',
      categoria: 'Clínica odontológica',
      telefone: '(16) 3722-5511',
      website: '',
      instagram: '@drcarlosodontologia',
      endereco: 'R. General Osório, 1200 - Centro, Franca - SP',
      bairro: 'Centro',
      cidade: 'Franca',
      estado: 'SP',
      avaliacao: 4.9,
      quantidade_avaliacoes: 64,
      url_google_maps: 'https://www.google.com/maps/place/Dr+Carlos+Odontologia',
      score: 95,
      score_justificativa: 'Profissional de saúde sem site próprio, excelente reputação.',
      status_crm: 'Contatado'
    }
  ];

  for (const l of leads) {
    await prisma.lead.create({ data: l });
  }
  console.log('Seed completed successfully.');
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());
