import type { Metadata } from "next";

import { LegalLayout } from "@/components/lp/legal-layout";
import { SITE_INFO } from "@/content/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: `Termos de Uso da plataforma ${SITE_INFO.name}, operada por ${SITE_INFO.parentCompany}.`,
  alternates: {
    canonical: SITE_INFO.legal.termsUrl,
  },
};

export default function TermosDeUsoPage() {
  return (
    <LegalLayout
      title="Termos de Uso"
      intro={`Estes Termos regulamentam a prestação dos serviços da ${SITE_INFO.name}, operada por ${SITE_INFO.parentCompany}, e devem ser lidos integralmente antes da contratação.`}
    >
      <section>
        <h2>Cláusula 1 – Objeto</h2>
        <p>
          1.1. Regulamenta a prestação de serviços de marketing digital, administração e
          gerenciamento de perfis comerciais, com ênfase em SaaS para otimização de
          ranqueamento no Google.
        </p>
        <p>
          1.2. Inclui monitoramento de performance e inserção de até 8 palavras-chave conforme
          escolha do contratante.
        </p>
        <p>
          1.3. Os serviços caracterizam-se como <strong>obrigações de meio</strong>, não
          garantindo resultados específicos, em razão da dependência de diretrizes de
          terceiros e da reputação do perfil.
        </p>
      </section>

      <section>
        <h2>Cláusula 2 – Aceitação do Serviço</h2>
        <p>
          2.1. Aceite validado por autenticação eletrônica (login OAuth) e marcação de
          checkbox.
        </p>
        <p>
          2.2. Validade conforme Código Civil Brasileiro, Medida Provisória nº 2.200-2/2001
          (ICP-Brasil) e Lei nº 14.063/2020.
        </p>
        <p>
          2.3. O aceite eletrônico é considerado pleno e eficaz para todos os fins legais.
        </p>
        <p>
          2.4. Presume-se realizado pelo próprio contratante, vedada alegação de
          desconhecimento ou fraude não comprovada.
        </p>
        <p>
          2.5. O fornecedor armazena registros com endereço IP, data/hora (timestamp) e
          versão do Termo.
        </p>
        <p>
          2.6. O contratante é responsável pela regularidade das informações e pela segurança
          de suas credenciais.
        </p>
        <p>
          2.7. A responsabilidade pelo uso indevido é exclusiva do contratante, salvo falha
          de segurança comprovadamente do fornecedor.
        </p>
      </section>

      <section>
        <h2>Cláusula 3 – Período de Cobrança (Assinatura Recorrente)</h2>
        <p>
          3.1. Contratação em modalidade de assinatura recorrente mensal via cartão de
          crédito válido.
        </p>
        <p>
          3.2. O contratante autoriza cobrança automática e recorrente dos valores devidos
          até cancelamento.
        </p>
        <p>
          3.3. A continuidade está condicionada à autorização e liquidação. Inadimplemento
          resulta em suspensão automática.
        </p>
        <p>
          3.4. Em rescisão, o fornecedor pode remover impulsionamentos sem que isso gere
          devolução ou estorno de quaisquer valores.
        </p>
      </section>

      <section>
        <h2>Cláusula 4 – Período de Cortesia (Facultativo, por Cupom)</h2>
        <p>
          4.1. Concessão exclusiva e facultativa do fornecedor, variável conforme
          sazonalidade e campanhas.
        </p>
        <p>4.2. Operacionalizado via cupom a ser inserido em campo próprio no pagamento.</p>
        <p>4.3. Duração padrão de 30 dias corridos, salvo estipulação diversa.</p>
        <p>
          4.4. Requer vinculação prévia de cartão de crédito válido para habilitar cobrança
          automática após o período.
        </p>
        <p>
          4.5. Findo o período sem cancelamento, inicia-se automaticamente a cobrança
          recorrente.
        </p>
        <p>
          4.6. O cancelamento deve ocorrer antes do término, via canais oficiais ou opção no
          aplicativo.
        </p>
        <p>
          4.7. O período não gera crédito financeiro nem é conversível. Impulsionamentos
          podem ser removidos sem estorno.
        </p>
      </section>

      <section>
        <h2>Cláusula 5 – Forma de Reajustes</h2>
        <p>
          5.1. Reajustes anuais conforme o Índice Nacional de Preços ao Consumidor Amplo
          (IPCA).
        </p>
        <p>
          5.2. Notificação com antecedência mínima de 7 dias corridos via e-mail ou
          aplicativo.
        </p>
        <p>
          5.3. Cancelamento após confirmação e prazo de 7 dias não gera reembolso.
        </p>
        <p>
          5.4. Cancelamento durante o período de cortesia pode ser realizado sem ônus, com
          estorno proporcional quando aplicável.
        </p>
        <p>
          5.5. O fornecedor pode remover impulsionamentos em até 15 dias após o cancelamento.
        </p>
      </section>

      <section>
        <h2>Cláusula 6 – Intermediação e Taxa de Adesão</h2>
        <p>
          6.1. A adesão é intermediada por agente comercial devidamente credenciado e/ou
          empregado credenciado.
        </p>
        <p>
          6.2. O agente é responsável por atendimento inicial, implementação de
          configurações, acesso ao perfil e envio de informações extras.
        </p>
        <p>6.3. A intermediação é parte essencial do processo de adesão.</p>
        <p>
          6.4. O agente comercial faz jus ao valor da taxa de adesão, formalizado via nota
          fiscal apropriada.
        </p>
      </section>

      <section>
        <h2>Cláusula 7 – Cancelamento e Estornos</h2>
        <p>
          7.1. O contratante pode solicitar cancelamento a qualquer momento sem que isso lhe
          acarrete penalidade ou multa.
        </p>
        <p>
          7.2. Direito ao estorno integral dentro de 7 dias, conforme artigo 49 da Lei nº
          8.078/1990.
        </p>
        <p>7.3. A solicitação pode ser feita via aplicativo oficial, telefone ou WhatsApp.</p>
        <p>
          7.4. Em até 7 dias, o fornecedor restitui a parcela paga e o agente estorna a taxa
          de adesão em até 30 dias.
        </p>
        <p>
          7.5. Após 7 dias, não haverá restituição do valor referente ao mês corrente.
        </p>
        <p>
          7.6. O gerenciamento dos perfis é suspenso imediatamente; a retirada completa de
          impulsionamentos ocorre em até 15 dias.
        </p>
        <p>
          7.7. As partes acordam que o cumprimento deste prazo é essencial para manutenção da
          integridade.
        </p>
      </section>

      <section>
        <h2>Cláusula 8 – Remoção de Propriedade Intelectual do Fornecedor ({SITE_INFO.parentCompany})</h2>
        <p>
          8.1. Em até 5 dias após a confirmação de cancelamento, o fornecedor tem direito à
          retirada integral de toda a propriedade intelectual de sua titularidade, incluindo
          códigos, scripts, tags, automações, templates, criativos, configurações técnicas,
          integrações, metadados, credenciais e chaves.
        </p>
        <p>
          §1º. O contratante obriga-se a manter acesso técnico ininterrupto e cooperar,
          abstendo-se de alterar permissões, trocar senhas ou revogar acessos.
        </p>
        <p>
          §2º. A retirada não abrange conteúdos, dados e ativos de titularidade do
          contratante.
        </p>
        <p>
          §3º. Esta cláusula prevalece sobre prazos gerais de descontinuidade operacional.
        </p>
      </section>

      <section>
        <h2>Cláusula 9 – Desconexão Antecipada e Penalidade</h2>
        <p>
          9.1. A desconexão antecipada pelo contratante (revogação de acessos, alteração de
          senhas/permissões, remoção de integrações antes da conclusão da Cláusula 8.1)
          resulta em penalidade não compensatória equivalente a{" "}
          <strong>50% (cinquenta por cento) do somatório das mensalidades</strong>{" "}
          efetivamente pagas desde a contratação até a data da desconexão, devida em 10 dias,
          sem prejuízo de perdas e danos suplementares.
        </p>
        <p>
          <strong>Parágrafo único.</strong> A penalidade tem natureza autônoma e incide
          independentemente de outras medidas.
        </p>
      </section>

      <section>
        <h2>Cláusula 10 – Proibições de Uso</h2>
        <p>
          10.1. É expressamente proibido usar os serviços de forma ilícita, fraudulenta ou
          difamatória.
        </p>
        <p>10.2. Inclui-se atos que violem legislação penal ou direitos de terceiros.</p>
        <p>
          10.3. O contratante deve abster-se de uso ofensivo, prejudicial ou que infrinja
          normas legais.
        </p>
        <p>10.4. É vedado burlar ou tentar burlar limites de uso estipulados.</p>
        <p>
          10.5. Tentativa ou efetivação de modificação, adaptação, tradução ou interferência
          no funcionamento da plataforma sem autorização expressa constitui violação grave
          deste contrato, passível de rescisão.
        </p>
        <p>
          10.6. Engenharia reversa, descompilação ou cópia não autorizada constituem violação
          de propriedade intelectual.
        </p>
        <p>
          10.7. O contratante compromete-se a não comprometer a segurança, integridade ou
          disponibilidade da plataforma.
        </p>
        <p>
          10.8. O uso malicioso resulta em multa não compensatória de{" "}
          <strong>R$ 10.000,00 (dez mil reais)</strong>, sem prejuízo de cancelamento
          automático, remoção de impulsionamentos e responsabilização por perdas e danos.
        </p>
        <p>
          10.9. O fornecedor reserva-se o direito de adotar todas as medidas judiciais e
          extrajudiciais necessárias para resguardar seus direitos.
        </p>
      </section>

      <section>
        <h2>Cláusula 11 – Limitação de Responsabilidade</h2>
        <p>
          11.1. O fornecedor não responde por lucros cessantes, danos indiretos, especiais,
          exemplares, punitivos ou consequentes, ainda que previsíveis.
        </p>
        <p>11.2. Não é responsável por perdas decorrentes de:</p>
        <ul>
          <li>
            a) Alterações de políticas, diretrizes, termos ou critérios algorítmicos do
            Google;
          </li>
          <li>
            b) Suspensão, limitação, remoção ou despublicação por plataformas terceiras;
          </li>
          <li>
            c) Reputação online do contratante, avaliações, conteúdo inserido ou
            descumprimento de diretrizes;
          </li>
          <li>
            d) Falhas, indisponibilidades, instabilidades ou atrasos de provedores externos;
          </li>
          <li>e) Atos ou omissões de agentes credenciados fora de diretrizes;</li>
          <li>f) Ordens de autoridades públicas ou judiciais.</li>
        </ul>
        <p>
          11.3. O limite de responsabilidade por danos diretos não excede o montante total
          efetivamente pago pelo contratante nos 3 meses anteriores ao evento.
        </p>
        <p>
          11.4. Esta disposição assegura equilíbrio justo nas relações contratuais.
        </p>
        <p>
          11.5. As partes reconhecem que se trata de acordo de natureza compensatória,
          refletindo alocação de riscos.
        </p>
        <p>
          11.6. Tentativa de aumento da responsabilidade é considerada violação material
          sujeita a medidas legais.
        </p>
        <p>
          11.7. Esta cláusula não se aplica em casos de dolo, fraude ou conduta
          intencionalmente prejudicial, conforme artigo 927, parágrafo único, do Código
          Civil.
        </p>
      </section>

      <section>
        <h2>Cláusula 12 – Disposições Gerais</h2>
        <p>
          12.1. Este Termo constitui acordo integral entre as partes, prevalecendo sobre
          entendimentos anteriores.
        </p>
        <p>
          12.2. Modificações requerem formalização escrita e aceite de ambas as partes,
          ressalvada alteração eletrônica conforme normativas aplicáveis.
        </p>
        <p>
          12.3. A invalidade de qualquer disposição não afeta as demais, que permanecerão em
          pleno vigor.
        </p>
        <p>
          12.4. As partes comprometem-se a negociar de boa-fé a substituição de disposição
          inválida.
        </p>
        <p>12.5. Termo regido pelas leis da República Federativa do Brasil.</p>
        <p>
          12.6. Foro eleito: Comarca de Goiânia, Estado de Goiás, com renúncia expressa a
          qualquer outro.
        </p>
        <p>
          12.7. As partes reconhecem que a aceitação eletrônica possui plena validade
          jurídica, equivalendo a assinatura física.
        </p>
      </section>

      <section>
        <h2>Cláusula 13 – Resolução de Conflitos</h2>
        <p>
          13.1. Foro eleito: Comarca de Goiânia, Estado de Goiás, conforme artigo 63 do
          Código de Processo Civil.
        </p>
        <p>
          13.2. As partes comprometem-se a buscar, previamente, uma solução alternativa ao
          litígio judicial, como mediação ou arbitragem conforme Lei nº 9.307/1996.
        </p>
        <p>
          13.3. A escolha de foro não impede procedimentos online e plataformas digitais
          conforme normas do Conselho Nacional de Justiça.
        </p>
        <p>
          13.4. Contradição ou nulidade parcial não afeta a validade das demais condições;
          aplica-se o princípio da conservação dos negócios jurídicos.
        </p>
      </section>

      <section>
        <h2>Cláusula 14 – Canal de Suporte ao Contratante</h2>
        <p>
          14.1. O fornecedor disponibiliza canais oficiais durante o horário comercial, de
          segunda a sexta-feira, das 9h às 18h (horário de Brasília).
        </p>
        <p>
          14.2. Atendimento via telefone ({SITE_INFO.phoneDisplay}) e WhatsApp.
        </p>
        <p>
          14.3. O fornecedor compromete-se a responder demandas dentro de um prazo de 72
          horas úteis, não se responsabilizando por atrasos externos.
        </p>
      </section>

      <section>
        <h2>Cláusula 15 – Divulgação de Resultados e Portfólio</h2>
        <p>
          15.1. O contratante autoriza, de forma não exclusiva, que o fornecedor divulgue
          resultados em materiais promocionais, websites, redes sociais e relatórios
          públicos.
        </p>
        <p>
          15.2. O fornecedor pode mencionar nome, marca e logotipo do contratante para
          portfólio e comprovação de eficácia técnica, observando limites legais.
        </p>
        <p>
          15.3. O contratante pode revogar autorização a qualquer tempo. O fornecedor cessa
          novas divulgações em até 15 dias; conteúdos já publicados podem permanecer
          arquivados por compliance.
        </p>
      </section>

      <section>
        <h2>Cláusula 16 – Propriedade Intelectual</h2>
        <p>
          16.1. Todos os direitos de propriedade intelectual relativos a tecnologia, sistemas,
          códigos-fonte, algoritmos, design, UI/UX, processos técnicos, metodologias e
          know-how são de titularidade exclusiva da {SITE_INFO.parentCompany}.
        </p>
        <p>
          16.2. É vedada ao contratante a cópia, reprodução, modificação, engenharia reversa,
          disponibilização a terceiros ou qualquer forma de uso não autorizado.
        </p>
        <p>
          16.3. O descumprimento acarreta responsabilidade civil e criminal conforme a
          legislação vigente sobre direitos autorais.
        </p>
      </section>

      <section>
        <h2>Cláusula 17 – Aceite da Política de Privacidade</h2>
        <p>
          17.1. O contratante declara estar ciente e de acordo que, ao confirmar a
          contratação, aceita automaticamente e integralmente a{" "}
          <a href={SITE_INFO.legal.privacyUrl}>Política de Privacidade</a>.
        </p>
        <p>
          17.2. A Política de Privacidade integra este Termo para todos os fins, obrigando
          ambas as partes.
        </p>
      </section>

      <section>
        <h2>Cláusula 18 – Atualização do Termo de Uso</h2>
        <p>
          18.1. O fornecedor pode atualizar este Termo de Uso a qualquer tempo, mediante
          notificação prévia com antecedência mínima de 7 dias.
        </p>
        <p>18.2. Notificação via canais oficiais: telefone ou WhatsApp.</p>
        <p>
          18.3. A continuidade do uso após o prazo implica concordância tácita e aceite
          integral das novas condições.
        </p>
      </section>
    </LegalLayout>
  );
}
