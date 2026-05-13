import type { Metadata } from "next";

import { LegalLayout } from "@/components/lp/legal-layout";
import { SITE_INFO } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de Privacidade da ${SITE_INFO.name}, em conformidade com a LGPD e o Marco Civil da Internet.`,
  alternates: {
    canonical: SITE_INFO.legal.privacyUrl,
  },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalLayout
      title="Política de Privacidade"
      intro={`Documento de conformidade com a LGPD (Lei nº 13.709/2018) e o Marco Civil da Internet (Lei nº 12.965/2014). A ${SITE_INFO.parentCompany} atua como controladora no tratamento de dados para otimização de perfis comerciais no Google através de plataforma SaaS.`}
    >
      <section>
        <h2>1. Apresentação</h2>
        <p>
          Esta Política descreve como a {SITE_INFO.parentCompany} trata dados pessoais no
          contexto da operação da plataforma {SITE_INFO.name}, em conformidade com a LGPD
          (Lei nº 13.709/2018) e o Marco Civil da Internet (Lei nº 12.965/2014).
        </p>
      </section>

      <section>
        <h2>2. Definições</h2>
        <ul>
          <li>
            <strong>Dados Pessoais</strong>: informação relacionada a pessoa natural
            identificada ou identificável.
          </li>
          <li>
            <strong>Dados Pessoais Sensíveis</strong>: origem racial, convicção religiosa,
            opinião política, filiação sindical, saúde, vida sexual, dados genéticos ou
            biométricos.
          </li>
          <li><strong>Titular</strong>: pessoa natural proprietária dos dados.</li>
          <li>
            <strong>Controlador</strong>: {SITE_INFO.parentCompany} (responsável pelas
            decisões de tratamento).
          </li>
          <li>
            <strong>Operador</strong>: pessoa que realiza tratamento em nome do controlador.
          </li>
          <li>
            <strong>Tratamento</strong>: toda operação realizada com dados pessoais.
          </li>
          <li>
            <strong>DPO (Encarregado)</strong>: canal de comunicação entre controlador,
            titulares e ANPD.
          </li>
          <li>
            <strong>Consentimento</strong>: manifestação livre, informada e inequívoca.
          </li>
          <li>
            <strong>Anonimização</strong>: perda de possibilidade de associação a indivíduo.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Informações Gerais sobre o Tratamento</h2>
        <h3>3.1. Agente de Tratamento</h3>
        <p>
          A {SITE_INFO.parentCompany} atua como controladora conforme art. 5º, VI, da LGPD.
        </p>
        <h3>3.2. Encarregado de Proteção de Dados (DPO)</h3>
        <ul>
          <li><strong>Nome:</strong> {SITE_INFO.dpo.name}</li>
          <li>
            <strong>E-mail:</strong>{" "}
            <a href={`mailto:${SITE_INFO.dpo.email}`}>{SITE_INFO.dpo.email}</a> |{" "}
            <a href={`mailto:${SITE_INFO.dpo.altEmail}`}>{SITE_INFO.dpo.altEmail}</a>
          </li>
          <li><strong>Endereço:</strong> {SITE_INFO.dpo.address}</li>
          <li><strong>Telefone:</strong> {SITE_INFO.phoneDisplay}</li>
        </ul>
      </section>

      <section>
        <h2>4. Princípios Aplicáveis (Art. 6º LGPD)</h2>
        <ul>
          <li>
            <strong>Finalidade</strong>: tratamento para propósitos legítimos, específicos e
            explícitos.
          </li>
          <li>
            <strong>Adequação</strong>: compatibilidade com finalidades informadas.
          </li>
          <li><strong>Necessidade</strong>: limitação ao mínimo necessário.</li>
          <li>
            <strong>Livre Acesso</strong>: consulta facilitada e gratuita sobre o tratamento.
          </li>
          <li>
            <strong>Qualidade dos Dados</strong>: exatidão, clareza, relevância e atualização.
          </li>
          <li>
            <strong>Transparência</strong>: informações claras e facilmente acessíveis.
          </li>
          <li>
            <strong>Segurança</strong>: medidas técnicas e administrativas de proteção.
          </li>
          <li><strong>Prevenção</strong>: adoção de medidas preventivas de danos.</li>
          <li>
            <strong>Não Discriminação</strong>: impossibilidade de fins discriminatórios
            ilícitos.
          </li>
          <li>
            <strong>Responsabilização</strong>: demonstração de cumprimento normativo.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Dados Pessoais Coletados</h2>
        <h3>5.1. Categorias de Dados</h3>

        <h4>5.1.1. Dados de Identificação e Cadastro</h4>
        <ul>
          <li>Nome completo, razão social, CNPJ/CPF</li>
          <li>Endereço comercial, telefone, e-mail</li>
          <li>Dados do representante legal</li>
        </ul>

        <h4>5.1.2. Dados de Acesso e Autenticação</h4>
        <ul>
          <li>Dados de autenticação eletrônica</li>
          <li>Registros de acesso (data, hora, IP)</li>
          <li>Informações de dispositivo</li>
          <li>Dados de sessão de navegação</li>
        </ul>

        <h4>5.1.3. Dados Financeiros e de Pagamento</h4>
        <ul>
          <li>Processados pela plataforma Stripe</li>
          <li>
            Sem armazenamento de CVV completo nos sistemas da {SITE_INFO.parentCompany}
          </li>
        </ul>

        <h4>5.1.4. Dados do Perfil Comercial</h4>
        <ul>
          <li>Informações do perfil Google</li>
          <li>Até 8 palavras-chave selecionadas</li>
          <li>Dados de performance e métricas</li>
          <li>Histórico de impulsionamentos</li>
          <li>Dados de monitoramento e automações</li>
        </ul>

        <h4>5.1.5. Dados de Comunicação</h4>
        <ul>
          <li>Histórico de e-mails</li>
          <li>Registros de WhatsApp e chamadas telefônicas</li>
          <li>Mensagens de suporte</li>
        </ul>

        <h4>5.1.6. Dados de Navegação e Cookies</h4>
        <ul>
          <li>Endereço IP, tipo de navegador</li>
          <li>Páginas acessadas, tempo de permanência</li>
          <li>Origem do acesso</li>
          <li>Cookies e tecnologias similares</li>
        </ul>

        <h3>5.2. Dados NÃO Coletados</h3>
        <ul>
          <li>Dados de cartão de crédito completos (Stripe realiza tokenização PCI-DSS)</li>
          <li>Dados pessoais sensíveis conforme art. 5º, II, da LGPD</li>
        </ul>
      </section>

      <section>
        <h2>6. Finalidades do Tratamento</h2>
        <h3>6.1. Prestação dos Serviços Contratados</h3>
        <ul>
          <li>Administração e gerenciamento de perfis Google</li>
          <li>Otimização e impulsionamento de ranqueamento</li>
          <li>Monitoramento de performance e métricas</li>
          <li>Implementação de automações</li>
          <li>Inserção e gerenciamento de palavras-chave</li>
        </ul>
        <h3>6.2. Gestão Contratual e Comercial</h3>
        <ul>
          <li>Identificação e autenticação do cliente</li>
          <li>Execução do Termo de Uso</li>
          <li>Gestão da relação contratual</li>
          <li>Processamento de pagamentos e cobranças</li>
          <li>Emissão de notas fiscais</li>
        </ul>
        <h3>6.3. Comunicação com Cliente</h3>
        <ul>
          <li>Notificações sobre serviços</li>
          <li>Resposta a solicitações e atendimento</li>
          <li>Comunicação sobre alterações contratuais</li>
          <li>Notificações sobre reajustes e cobranças</li>
        </ul>
        <h3>6.4. Cumprimento de Obrigações Legais</h3>
        <ul>
          <li>Atendimento a determinações judiciais</li>
          <li>Cumprimento de obrigações fiscais e tributárias</li>
          <li>Requisições de autoridades competentes</li>
          <li>Obrigações contábeis e regulatórias</li>
        </ul>
        <h3>6.5. Segurança e Prevenção de Fraudes</h3>
        <ul>
          <li>Prevenção e detecção de fraudes</li>
          <li>Proteção contra acessos não autorizados</li>
          <li>Monitoramento de segurança da informação</li>
          <li>Identificação de atividades suspeitas ou ilícitas</li>
        </ul>
        <h3>6.6. Melhoria dos Serviços</h3>
        <ul>
          <li>Análise de desempenho da plataforma</li>
          <li>Identificação de melhorias e correção de falhas</li>
          <li>Desenvolvimento de novas funcionalidades</li>
          <li>Otimização da experiência do usuário</li>
        </ul>
      </section>

      <section>
        <h2>7. Bases Legais do Tratamento (Art. 7º LGPD)</h2>
        <h3>7.1. Consentimento (Art. 7º, I)</h3>
        <ul>
          <li>Comunicações de marketing e promocionais</li>
          <li>Tratamento para finalidades não essenciais</li>
          <li>Cookies não essenciais</li>
        </ul>
        <h3>7.2. Execução de Contrato (Art. 7º, V)</h3>
        <ul>
          <li>Criação e gestão de conta</li>
          <li>Prestação dos serviços de otimização</li>
          <li>Processamento de pagamentos</li>
          <li>Gerenciamento de perfis comerciais</li>
        </ul>
        <h3>7.3. Cumprimento de Obrigação Legal (Art. 7º, II)</h3>
        <ul>
          <li>Emissão de notas fiscais</li>
          <li>Cumprimento de obrigações tributárias</li>
          <li>Requisições de autoridades</li>
          <li>Manutenção de registros contábeis</li>
        </ul>
        <h3>7.4. Exercício Regular de Direitos (Art. 7º, VI)</h3>
        <ul>
          <li>Defesa em processos judiciais</li>
          <li>Constituição de provas</li>
          <li>Proteção de direitos contratuais</li>
        </ul>
        <h3>7.5. Legítimo Interesse (Art. 7º, IX)</h3>
        <ul>
          <li>Segurança da plataforma e prevenção de fraudes</li>
          <li>Melhoria contínua dos serviços</li>
          <li>Proteção ao crédito</li>
          <li>Análise de métricas e desempenho</li>
          <li>Divulgação institucional com anonimização ou opt-out</li>
        </ul>
      </section>

      <section>
        <h2>8. Compartilhamento de Dados Pessoais</h2>
        <h3>8.1. Hipóteses de Compartilhamento</h3>
        <h4>8.1.1. Prestadores de Serviços (Operadores)</h4>
        <p>
          <strong>Stripe</strong> — Processamento de pagamentos com cartão de crédito. Dados
          financeiros tratados diretamente pela Stripe, com políticas próprias e
          certificações PCI-DSS.
        </p>
        <p>
          <strong>Google</strong> — Gerenciamento e otimização de perfis comerciais. Acesso
          mediante autenticação do cliente, necessário para a prestação dos serviços.
        </p>
        <p>
          <strong>Agentes Comerciais Credenciados</strong> — Intermediação de captação e
          implementação inicial. Acesso limitado aos dados necessários. Taxa de adesão.
        </p>
        <p>
          <strong>Provedores de Infraestrutura Tecnológica</strong> — Hospedagem,
          armazenamento em nuvem e banco de dados.
        </p>

        <h4>8.1.2. Autoridades Públicas e Cumprimento Legal</h4>
        <p>
          Compartilhamento com autoridades judiciais, administrativas ou governamentais
          conforme determinação legal, requisição, intimação ou ordem judicial.
        </p>

        <h4>8.1.3. Operações Societárias</h4>
        <p>
          Transferência em fusão, aquisição, reorganização ou venda de ativos, com o mesmo
          nível de proteção.
        </p>

        <h3>8.2. Vedações ao Compartilhamento</h3>
        <p>
          Não comercializamos dados com terceiros para marketing ou publicidade, salvo com
          consentimento específico.
        </p>

        <h3>8.3. Transferência Internacional de Dados</h3>
        <p>
          Stripe (pagamentos – PCI-DSS) e Google podem manter infraestrutura em outros países.
        </p>
        <p>Garantias observadas (art. 33 LGPD):</p>
        <ul>
          <li>Adequação do país de destino</li>
          <li>Cláusulas contratuais específicas</li>
          <li>Certificações reconhecidas internacionalmente</li>
          <li>Consentimento, quando aplicável</li>
        </ul>

        <h3>8.4. Direito de Informação</h3>
        <p>
          O titular pode solicitar informações sobre entidades com as quais houve
          compartilhamento (art. 18, VII, LGPD).
        </p>
      </section>

      <section>
        <h2>9. Armazenamento e Retenção de Dados</h2>
        <h3>9.1. Período de Armazenamento</h3>
        <p>
          <strong>Durante a vigência contratual:</strong> dados necessários são mantidos
          enquanto o contrato estiver ativo.
        </p>
        <p>
          <strong>Após o término do contrato:</strong> dados podem ser mantidos por prazo
          adicional para:
        </p>
        <ul>
          <li>Cumprimento de obrigações legais</li>
          <li>Exercício regular de direitos</li>
          <li>Atendimento a determinações de autoridades</li>
          <li>Outros prazos legais aplicáveis</li>
          <li>Finalidade de winback</li>
        </ul>
        <p>
          <strong>Dados de pagamento:</strong> armazenados exclusivamente pela Stripe
          (PCI-DSS).
        </p>
        <p>
          <strong>Registros de aceite e atendimentos:</strong> mantidos por 5 (cinco) anos
          após o término contratual.
        </p>

        <h3>9.2. Exclusão de Dados</h3>
        <p>
          Ao término do prazo, ocorre eliminação segura e definitiva ou anonimização.
        </p>

        <h3>9.3. Armazenamento Seguro</h3>
        <p>Medidas técnicas e organizacionais conforme a Seção 10.</p>
      </section>

      <section>
        <h2>10. Medidas de Segurança</h2>
        <h3>10.1. Compromisso com Segurança</h3>
        <p>
          Adotamos medidas técnicas e administrativas conforme o art. 46 da LGPD para
          proteção contra acessos não autorizados e situações acidentais ou ilícitas.
        </p>

        <h3>10.2. Medidas Técnicas Implementadas</h3>
        <h4>10.2.1. Controle de Acesso</h4>
        <ul>
          <li>Autenticação obrigatória à plataforma</li>
          <li>Políticas de senhas fortes</li>
          <li>Autenticação multifator quando aplicável</li>
          <li>Segregação de perfis e permissões</li>
          <li>Controle de sessões e logout automático</li>
        </ul>
        <h4>10.2.2. Criptografia</h4>
        <ul>
          <li>Criptografia em trânsito (HTTPS/TLS)</li>
          <li>Criptografia de dados sensíveis em repouso</li>
          <li>Proteção de credenciais de acesso</li>
          <li>Tokenização de dados de pagamento</li>
        </ul>
        <h4>10.2.3. Proteção de Infraestrutura</h4>
        <ul>
          <li>Firewalls e sistemas de detecção de intrusão</li>
          <li>Antivírus e antimalware atualizados</li>
          <li>Monitoramento contínuo de ameaças</li>
          <li>Proteção contra ataques DDoS</li>
          <li>Segmentação de rede</li>
        </ul>
        <h4>10.2.4. Backup e Recuperação</h4>
        <ul>
          <li>Backups periódicos</li>
          <li>Armazenamento seguro de cópias</li>
          <li>Plano de recuperação de desastres</li>
          <li>Testes regulares de restauração</li>
        </ul>
        <h4>10.2.5. Auditoria e Monitoramento</h4>
        <ul>
          <li>Registro de logs de acesso e atividades</li>
          <li>Monitoramento de eventos de segurança</li>
          <li>Análise de comportamentos anômalos</li>
          <li>Auditorias periódicas de segurança</li>
        </ul>

        <h3>10.3. Medidas Organizacionais Implementadas</h3>
        <h4>10.3.1. Políticas e Procedimentos</h4>
        <ul>
          <li>Política de Segurança da Informação</li>
          <li>Procedimentos operacionais padronizados</li>
          <li>Política de classificação de dados</li>
          <li>Procedimentos de resposta a incidentes</li>
        </ul>
        <h4>10.3.2. Gestão de Pessoal</h4>
        <ul>
          <li>Termo de confidencialidade assinado</li>
          <li>Treinamento periódico sobre proteção</li>
          <li>Conscientização sobre práticas de segurança</li>
          <li>Definição clara de responsabilidades</li>
        </ul>
        <h4>10.3.3. Gestão de Prestadores</h4>
        <ul>
          <li>Cláusulas de proteção em contratos</li>
          <li>Avaliação de segurança de prestadores</li>
          <li>Monitoramento contínuo</li>
          <li>Acordos de nível de serviço (SLA)</li>
        </ul>

        <h3>10.4. Limitações de Responsabilidade</h3>
        <p>
          A {SITE_INFO.parentCompany} não garante segurança absoluta e não é responsável por:
        </p>
        <ul>
          <li>Danos decorrentes de caso fortuito ou força maior</li>
          <li>Atos de terceiros não autorizados</li>
          <li>Uso indevido de credenciais pelo titular</li>
          <li>Vulnerabilidades em sistemas de terceiros</li>
        </ul>

        <h3>10.5. Resposta a Incidentes de Segurança</h3>
        <p>Em caso de incidente com risco ou dano relevante:</p>
        <ol>
          <li>Comunicação à ANPD e aos titulares em até 5 dias úteis</li>
          <li>
            Notificação informando: natureza e extensão do incidente, dados pessoais
            afetados, medidas técnicas e de segurança adotadas, riscos relacionados e
            medidas que o titular pode adotar
          </li>
          <li>Medidas corretivas imediatas</li>
          <li>Documentação do incidente</li>
        </ol>
      </section>

      <section>
        <h2>11. Cookies e Tecnologias Similares</h2>
        <h3>11.1. O que são Cookies</h3>
        <p>
          Pequenos arquivos de texto armazenados no dispositivo para reconhecimento e
          armazenamento de preferências.
        </p>

        <h3>11.2. Tipos de Cookies Utilizados</h3>
        <h4>11.2.1. Cookies Essenciais (Necessários)</h4>
        <p>
          <strong>Finalidade:</strong> funcionamento básico da plataforma.
        </p>
        <ul>
          <li>Autenticação e manutenção de sessão</li>
          <li>Segurança da plataforma</li>
          <li>Lembrança de preferências de configuração</li>
          <li>Balanceamento de carga</li>
        </ul>
        <p>
          <strong>Base legal:</strong> Legítimo interesse (Art. 7º, IX, LGPD).{" "}
          <strong>Retenção:</strong> sessão ou conforme necessário.
        </p>

        <h4>11.2.2. Cookies de Desempenho e Analíticos</h4>
        <p>
          <strong>Finalidade:</strong> coleta de informações sobre o uso da plataforma.
        </p>
        <ul>
          <li>Páginas mais visitadas</li>
          <li>Tempo de permanência</li>
          <li>Caminhos de navegação</li>
          <li>Identificação de erros</li>
        </ul>
        <p>
          <strong>Base legal:</strong> Consentimento (Art. 7º, I, LGPD).{" "}
          <strong>Retenção:</strong> até 24 meses.
        </p>

        <h4>11.2.3. Cookies de Funcionalidade</h4>
        <p>
          <strong>Finalidade:</strong> lembrança de escolhas do usuário e recursos
          aprimorados.
        </p>
        <ul>
          <li>Idioma preferido</li>
          <li>Preferências de visualização</li>
          <li>Personalização de interface</li>
        </ul>
        <p>
          <strong>Base legal:</strong> Consentimento (Art. 7º, I, LGPD).{" "}
          <strong>Retenção:</strong> até 12 meses.
        </p>

        <h3>11.3. Cookies de Terceiros</h3>
        <ul>
          <li>
            <strong>Google Analytics:</strong> análise de tráfego e comportamento
          </li>
          <li>
            <strong>Stripe:</strong> processamento seguro de pagamentos
          </li>
        </ul>
        <p>São regidos pelas políticas de privacidade dos respectivos terceiros.</p>

        <h3>11.4. Gestão de Cookies</h3>
        <h4>11.4.1. Banner de Cookies</h4>
        <p>Exibido ao primeiro acesso, permitindo:</p>
        <ul>
          <li>Aceitar todos os cookies</li>
          <li>Rejeitar cookies não essenciais</li>
          <li>Personalizar preferências por categoria</li>
        </ul>
        <h4>11.4.2. Configurações do Navegador</h4>
        <ul>
          <li>Bloquear todos os cookies</li>
          <li>Aceitar apenas de sites específicos</li>
          <li>Receber notificação antes de aceitar</li>
          <li>Excluir cookies existentes</li>
        </ul>
        <p>
          <strong>Aviso:</strong> o bloqueio de cookies essenciais pode afetar o
          funcionamento.
        </p>
        <h4>11.4.3. Ferramentas de Opt-out</h4>
        <ul>
          <li>Privacy Badger</li>
          <li>Ghostery</li>
          <li>uBlock Origin</li>
          <li>Do Not Track (DNT)</li>
        </ul>

        <h3>11.5. Outras Tecnologias de Rastreamento</h3>
        <p>Além de cookies, podemos utilizar:</p>
        <ul>
          <li>Web beacons (pixels)</li>
          <li>Local Storage</li>
          <li>Session Storage</li>
        </ul>
        <p>Mesmas finalidades e práticas de privacidade dos cookies.</p>
      </section>

      <section>
        <h2>12. Direitos dos Titulares (Art. 18 LGPD)</h2>
        <h3>12.1. Direitos Garantidos</h3>
        <ul>
          <li>
            <strong>Confirmação e Acesso</strong> (Art. 18, I e II): obter confirmação sobre
            tratamento e acesso aos dados.
          </li>
          <li>
            <strong>Correção</strong> (Art. 18, III): solicitar correção de dados
            incompletos, inexatos ou desatualizados.
          </li>
          <li>
            <strong>Anonimização, Bloqueio ou Eliminação</strong> (Art. 18, IV): solicitar
            anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.
          </li>
          <li>
            <strong>Portabilidade</strong> (Art. 18, V): solicitar portabilidade a outro
            provedor conforme regulamentação da ANPD.
          </li>
          <li>
            <strong>Eliminação</strong> (Art. 18, VI): solicitar eliminação de dados tratados
            com base em consentimento (exceto art. 16, LGPD).
          </li>
          <li>
            <strong>Informação sobre Compartilhamento</strong> (Art. 18, VII): obter
            informações sobre entidades receptoras de dados.
          </li>
          <li>
            <strong>Informação sobre Não Consentimento</strong> (Art. 18, VIII): ser
            informado sobre a possibilidade de não consentir e as consequências.
          </li>
          <li>
            <strong>Revogação do Consentimento</strong> (Art. 18, IX): revogar consentimento
            a qualquer momento por procedimento gratuito.
          </li>
        </ul>

        <h3>12.2. Exercício dos Direitos</h3>
        <p><strong>Canais de contato:</strong></p>
        <ul>
          <li>
            E-mail DPO:{" "}
            <a href={`mailto:${SITE_INFO.dpo.email}`}>{SITE_INFO.dpo.email}</a>
          </li>
          <li>
            Formulário online:{" "}
            <a
              href="https://adssoftware.com.br/privacidade/solicitacoes"
              target="_blank"
              rel="noreferrer"
            >
              adssoftware.com.br/privacidade/solicitacoes
            </a>
          </li>
        </ul>
        <p>
          <strong>Opt-out de cases/marketing:</strong> enviar solicitação ao DPO com prazo de
          15 dias.
        </p>

        <h3>12.3. Prazo de Resposta</h3>
        <ul>
          <li>Formato simplificado: imediatamente, sempre que possível</li>
          <li>Declaração completa: até 15 (quinze) dias contados da data do requerimento</li>
        </ul>

        <h3>12.4. Gratuidade</h3>
        <p>
          O exercício dos direitos é gratuito. Cobranças podem ocorrer apenas em requisições
          manifestamente infundadas ou excessivas, com base em custos administrativos.
        </p>

        <h3>12.5. Limitações ao Exercício dos Direitos</h3>
        <p>Os direitos podem ser limitados ou recusados em caso de:</p>
        <ul>
          <li>Cumprimento de obrigação legal ou regulatória</li>
          <li>Estudo por órgão de pesquisa (com dados anonimizados)</li>
          <li>Execução de contrato</li>
          <li>
            Exercício regular de direitos em processo judicial, administrativo ou arbitral
          </li>
          <li>Proteção da vida ou incolumidade física</li>
          <li>Tutela da saúde</li>
          <li>Tratamento indispensável para interesse legítimo do controlador</li>
        </ul>
        <p>A {SITE_INFO.parentCompany} informará os motivos da limitação.</p>
      </section>

      <section>
        <h2>13. Dados de Menores de Idade</h2>
        <h3>13.1. Restrição de Uso</h3>
        <p>
          Os serviços destinam-se exclusivamente a pessoas jurídicas e representantes legais
          maiores de 18 anos. A plataforma não é direcionada a menores.
        </p>
        <h3>13.2. Tratamento Acidental</h3>
        <p>
          A identificação de coleta inadvertida de dados de menores resulta em eliminação o
          mais rapidamente possível.
        </p>
        <h3>13.3. Comunicação de Irregularidades</h3>
        <p>
          Em caso de fornecimento de dados de menores, contate imediatamente o DPO.
        </p>
      </section>

      <section>
        <h2>14. Alterações na Política de Privacidade</h2>
        <h3>14.1. Direito de Atualização</h3>
        <p>
          A {SITE_INFO.parentCompany} reserva-se o direito de modificar esta Política a
          qualquer tempo, visando aprimoramento e adequação a alterações legislativas,
          regulamentares, jurisprudenciais ou mudanças nas práticas.
        </p>
        <h3>14.2. Comunicação de Alterações</h3>
        <p>Em caso de alterações relevantes:</p>
        <ul>
          <li>Atualização da data de &ldquo;última atualização&rdquo;</li>
          <li>Comunicação aos clientes por e-mail ou notificação na plataforma</li>
          <li>Disponibilização destacada da nova versão</li>
        </ul>
        <h3>14.3. Aceitação das Alterações</h3>
        <p>
          A continuidade do uso implica aceitação. O desacordo permite solicitação de
          cancelamento conforme o Termo de Uso.
        </p>
        <h3>14.4. Histórico de Versões</h3>
        <p>Versões anteriores ficam disponíveis mediante solicitação ao DPO.</p>
      </section>

      <section>
        <h2>15. Legislação e Foro Aplicáveis</h2>
        <h3>15.1. Lei Aplicável</h3>
        <p>Esta Política é regida pelas leis da República Federativa do Brasil, especialmente:</p>
        <ul>
          <li>Lei nº 13.709/2018 (LGPD)</li>
          <li>Lei nº 12.965/2014 (Marco Civil da Internet)</li>
          <li>Demais normas aplicáveis</li>
        </ul>
        <h3>15.2. Foro de Eleição</h3>
        <p>
          Eleição do foro da Comarca de Goiânia, Estado de Goiás, para controvérsias.
        </p>
        <p>
          <strong>Exceção:</strong> titulares que sejam consumidores pessoas físicas podem
          optar pelo foro de seu domicílio (art. 101, I, CDC).
        </p>
      </section>

      <section>
        <h2>16. Disposições Finais</h2>
        <h3>16.1. Independência das Cláusulas</h3>
        <p>
          A invalidade de qualquer disposição não afeta as demais, que permanecerão em pleno
          vigor.
        </p>
        <h3>16.2. Relação com Outros Documentos</h3>
        <p>
          Esta Política complementa o{" "}
          <a href={SITE_INFO.legal.termsUrl}>Termo de Uso</a> da plataforma. Em caso de
          conflito, prevalece a disposição mais protetiva ao titular, sem prejuízo das
          condições comerciais do Termo.
        </p>
        <h3>16.3. Idioma</h3>
        <p>
          Redigida em português, sendo essa a versão oficial e prevalente em traduções.
        </p>
        <h3>16.4. Dúvidas e Informações Adicionais</h3>
        <p><strong>Encarregado de Proteção de Dados (DPO):</strong></p>
        <ul>
          <li><strong>Nome:</strong> {SITE_INFO.dpo.name}</li>
          <li>
            <strong>E-mail:</strong>{" "}
            <a href={`mailto:${SITE_INFO.dpo.email}`}>{SITE_INFO.dpo.email}</a>
          </li>
          <li><strong>Endereço:</strong> {SITE_INFO.dpo.address}</li>
          <li><strong>Telefone:</strong> {SITE_INFO.phoneDisplay}</li>
        </ul>
        <h3>16.5. Canal com a ANPD</h3>
        <p>Registro de reclamações e denúncias junto à ANPD:</p>
        <ul>
          <li>
            <strong>Site:</strong>{" "}
            <a href="https://www.gov.br/anpd" target="_blank" rel="noreferrer">
              gov.br/anpd
            </a>
          </li>
          <li>
            <strong>Endereço:</strong> SIA Trecho 01 Lote 1565, Zona Industrial, Guará/DF,
            CEP 71.200-001
          </li>
        </ul>
        <h3>16.6. Dados da Empresa</h3>
        <ul>
          <li><strong>{SITE_INFO.parentCompany.toUpperCase()}</strong></li>
          <li>
            <strong>Endereço:</strong> {SITE_INFO.address.street},{" "}
            {SITE_INFO.address.neighborhood}, CEP {SITE_INFO.address.zip},{" "}
            {SITE_INFO.address.city} – {SITE_INFO.address.state}
          </li>
          <li><strong>CNPJ:</strong> {SITE_INFO.cnpj}</li>
        </ul>
      </section>
    </LegalLayout>
  );
}
