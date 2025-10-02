import bpcCircularLogo from "@assets/image_1758569899954.png";

export default function About() {
  return (
    <div className="pt-20">
      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img 
                src={bpcCircularLogo} 
                alt="BPC Logo" 
                className="h-24 w-24 opacity-80"
                data-testid="img-about-logo"
              />
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-display font-bold text-foreground mb-8" data-testid="text-about-title">
              Sobre a BPC
            </h1>
            
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-2xl text-foreground font-semibold mb-6 leading-relaxed" data-testid="text-about-intro">
                Planejamento, proteção e resultados sustentáveis
              </p>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-about-history">
                Desde 2017, a BPC Planejamento e Consultoria oferece soluções completas em planos de saúde e seguros de vida. Com experiência de 20 anos no mercado financeiro, trazemos uma visão estratégica única para cuidar do que mais importa: a proteção de pessoas e a sustentabilidade de empresas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-approach">
                Nosso trabalho vai além da simples intermediação. Realizamos consultoria dedicada e personalizada, analisando cada caso com profundidade para entregar soluções que realmente fazem sentido para sua realidade — seja você uma pessoa buscando proteção familiar ou uma empresa estruturando benefícios para seus colaboradores.
              </p>
            </div>
              

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-muted rounded-2xl p-8" data-testid="diferencial-experiencia">
                <div className="text-5xl mb-6">💼</div>
                <h4 className="text-xl font-display font-semibold text-foreground mb-4">Experiência Sólida</h4>
                <p className="text-muted-foreground leading-relaxed">
                  20 anos no mercado financeiro e 7 anos especializados em seguros e planos de saúde. Nossa trajetória garante visão estratégica e soluções consistentes.
                </p>
              </div>
              <div className="bg-muted rounded-2xl p-8" data-testid="diferencial-transparencia">
                <div className="text-5xl mb-6">🔍</div>
                <h4 className="text-xl font-display font-semibold text-foreground mb-4">Transparência Total</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Explicamos cada detalhe, sem letras miúdas ou surpresas. Construímos relacionamentos de longo prazo baseados em clareza, ética e confiança.
                </p>
              </div>
              <div className="bg-muted rounded-2xl p-8" data-testid="diferencial-protecao">
                <div className="text-5xl mb-6">🛡️</div>
                <h4 className="text-xl font-display font-semibold text-foreground mb-4">Consultoria Completa</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Atuamos em planos de saúde e seguros de vida com visão de planejamento. Acompanhamos você antes, durante e após a contratação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-8" data-testid="text-mission-title">
                Nossa Essência
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-mission-description">
                Os princípios que guiam nossa consultoria e definem nosso compromisso com a excelência no atendimento
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-background rounded-2xl p-8 shadow-lg text-center" data-testid="card-missao">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Levar proteção e planejamento em saúde e vida com soluções consultivas e sustentáveis.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-8 shadow-lg text-center" data-testid="card-visao">
                <div className="text-5xl mb-6">🔮</div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser referência em consultoria de benefícios, unindo cuidado com pessoas e resultados para empresas.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-8 shadow-lg text-center" data-testid="card-valores">
                <div className="text-5xl mb-6">⭐</div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Valores</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transparência, proximidade, sustentabilidade, excelência e cuidado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-8" data-testid="text-work-title">
                Como Trabalhamos
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Um processo estruturado e transparente para garantir que você tenha a melhor solução em planos de saúde e seguros de vida
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start" data-testid="step-analise">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Análise Inicial Completa</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Realizamos uma entrevista detalhada para entender seu perfil, necessidades de saúde, histórico médico familiar, orçamento disponível e expectativas. Para empresas, analisamos a estrutura organizacional, perfil dos colaboradores e objetivos estratégicos.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start" data-testid="step-pesquisa">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Pesquisa e Comparação de Mercado</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fazemos cotações com todas as principais operadoras do mercado (Omint, SulAmérica, Amil, Porto Seguro, Bradesco, Alice e outras). Comparamos coberturas, redes credenciadas, carências, abrangência geográfica e custos para encontrar as melhores opções para seu caso específico.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start" data-testid="step-apresentacao">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Apresentação de Opções</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Apresentamos as melhores alternativas de forma clara e transparente, detalhando prós e contras de cada opção, explicando toda a cobertura, condições contratuais, prazos de carência e valores. Você tem todas as informações para tomar a melhor decisão.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start" data-testid="step-contratacao">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Suporte na Contratação</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cuidamos de toda a burocracia: documentação, preenchimento de formulários, negociação de condições especiais quando possível, e acompanhamento do processo de aprovação. Você não precisa se preocupar com nada.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start" data-testid="step-acompanhamento">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">5</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Acompanhamento Pós-Venda</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nosso relacionamento não termina na contratação. Acompanhamos sua satisfação, esclarecemos dúvidas sobre uso do plano, auxiliamos em processos de reembolso, inclusão ou exclusão de dependentes, e estamos disponíveis para qualquer necessidade que surgir ao longo do tempo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operadoras Parceiras Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-8" data-testid="text-partners-title">
              Operadoras Parceiras
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Trabalhamos com as principais operadoras de planos de saúde do mercado brasileiro, garantindo que você tenha acesso às melhores opções disponíveis
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {['Omint', 'SulAmérica', 'Amil', 'Porto Seguro', 'Bradesco Saúde', 'Alice', 'Unimed', 'Hapvida/NotreDame'].map((operadora) => (
                <div key={operadora} className="bg-background rounded-xl p-6 shadow-md border border-border flex items-center justify-center" data-testid={`partner-${operadora.toLowerCase().replace(/\s+/g, '-')}`}>
                  <span className="text-lg font-semibold text-foreground">{operadora}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground">
              E outras operadoras do mercado, sempre buscando a melhor solução para cada cliente
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
