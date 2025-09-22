import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, DollarSign, Heart, CheckCircle, Users, Briefcase } from "lucide-react";

export default function LifeInsurance() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-8">🛡️</div>
            <h1 className="text-5xl sm:text-6xl font-display font-bold text-foreground mb-8" data-testid="text-life-insurance-title">
              Seguro de Vida
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-2xl font-display font-medium text-foreground mb-6" data-testid="text-life-insurance-subtitle">
              Proteção Financeira Complementar
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed" data-testid="text-life-insurance-description">
              Complemento estratégico ao seu plano de saúde. Oferecemos as melhores opções em seguros de vida para garantir proteção financeira completa para sua família, com nossa consultoria especializada e transparência total.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link href="/contato">
                <Button size="lg" className="px-12 py-4 text-lg font-semibold shadow-xl" data-testid="button-saiba-mais-seguro">
                  Consultoria em Proteção Financeira
                </Button>
              </Link>
              <Link href="/planos-saude">
                <Button variant="outline" size="lg" className="px-12 py-4 text-lg font-semibold border-2" data-testid="button-planos-principais">
                  Ver Planos de Saúde (Principal)
                </Button>
              </Link>
            </div>
            
            <div className="text-center text-sm text-muted-foreground">
              💡 <strong>Dica:</strong> Nosso foco principal são os planos de saúde. O seguro de vida é um serviço complementar que oferecemos.
            </div>
          </div>
        </div>
      </section>

      {/* Why Life Insurance Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-8" data-testid="text-benefits-life-title">
                O Seguro Ideal para Cada Situação
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-benefits-life-description">
                Plano de saúde cuida da sua saúde, seguro de vida protege financeiramente sua família. Juntos, oferecem proteção completa.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="bg-background rounded-2xl p-8 shadow-lg" data-testid="benefit-protecao-financeira">
                <div className="text-4xl mb-6">💰</div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Segurança Financeira Familiar</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Enquanto o plano de saúde cuida dos custos médicos, o seguro de vida garante que sua família mantenha o padrão de vida mesmo em sua ausência. É a proteção financeira que complementa perfeitamente a proteção de saúde.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">Manutenção do padrão de vida familiar</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">Pagamento de dívidas e financiamentos</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">Educação dos filhos garantida</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-6xl mb-6">🛡️</div>
                <h4 className="text-2xl font-display font-semibold text-foreground mb-4">Proteção Dupla</h4>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Plano de Saúde:</strong> Cuida da sua saúde<br/>
                  <strong>Seguro de Vida:</strong> Protege financeiramente sua família
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-8" data-testid="text-coverage-types-title">
                Modalidades Disponíveis
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-coverage-types-description">
                Oferecemos consultoria especializada para encontrar o seguro de vida mais adequado para cada situação
              </p>
            </div>

            <div className="space-y-12">
              {/* Individual Coverage */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-testid="section-cobertura-individual">
                <div>
                  <div className="bg-primary/5 rounded-2xl p-8">
                    <div className="text-4xl mb-6">👤</div>
                    <h3 className="text-3xl font-display font-bold text-foreground mb-6">Proteção Individual</h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Ideal para profissionais autônomos, solteiros ou quem deseja proteção pessoal específica. 
                      Coberturas essenciais com valores personalizados conforme seu perfil.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div>
                        <div className="text-2xl font-bold text-primary mb-1">Básico</div>
                        <div className="text-sm text-muted-foreground">Morte natural/acidental</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary mb-1">Invalidez</div>
                        <div className="text-sm text-muted-foreground">Proteção permanente</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary mb-1">Auxílios</div>
                        <div className="text-sm text-muted-foreground">Funeral e assistência</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary mb-1">24h</div>
                        <div className="text-sm text-muted-foreground">Assistência completa</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-display font-semibold text-foreground mb-4">Foco na Proteção Pessoal</h4>
                  <p className="text-muted-foreground">Segurança financeira individual com coberturas essenciais</p>
                </div>
              </div>

              {/* Family Coverage - Most Popular */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-muted rounded-3xl p-8" data-testid="section-cobertura-familiar">
                <div className="text-center">
                  <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">Mais Procurado</div>
                  <div className="text-4xl mb-6">👨‍👩‍👧‍👦</div>
                  <h4 className="text-2xl font-display font-semibold text-foreground mb-4">Proteção Familiar Completa</h4>
                  <p className="text-muted-foreground">A escolha ideal para quem tem família e responsabilidades financeiras</p>
                </div>
                <div>
                  <div className="bg-background rounded-2xl p-8 shadow-lg">
                    <h3 className="text-3xl font-display font-bold text-foreground mb-6">Proteção Familiar</h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      A modalidade mais procurada! Cobertura estendida para cônjuge e filhos, incluindo auxílios específicos 
                      como educação e cesta básica para garantir o bem-estar familiar.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4"></div>
                        <div>
                          <h4 className="font-semibold text-foreground">Cobertura Estendida</h4>
                          <p className="text-muted-foreground text-sm">Proteção para titular, cônjuge e filhos</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4"></div>
                        <div>
                          <h4 className="font-semibold text-foreground">Auxílio Educação</h4>
                          <p className="text-muted-foreground text-sm">Garantia de continuidade dos estudos dos filhos</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4"></div>
                        <div>
                          <h4 className="font-semibold text-foreground">Benefícios Extras</h4>
                          <p className="text-muted-foreground text-sm">Cesta básica e outros auxílios familiares</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corporate Coverage */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-testid="section-cobertura-empresarial">
                <div>
                  <div className="bg-background rounded-2xl p-8 border border-border">
                    <div className="text-4xl mb-6">🏢</div>
                    <h3 className="text-3xl font-display font-bold text-foreground mb-6">Proteção Empresarial</h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Soluções corporativas para empresas que desejam oferecer proteção adicional aos colaboradores. 
                      Complementa o plano de saúde empresarial com segurança financeira.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">Equipe</div>
                        <div className="text-sm text-muted-foreground">Toda a equipe protegida</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">Gestão</div>
                        <div className="text-sm text-muted-foreground">Administração simplificada</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">Relatórios</div>
                        <div className="text-sm text-muted-foreground">Controle detalhado</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">Benefícios</div>
                        <div className="text-sm text-muted-foreground">Extras corporativos</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-display font-semibold text-foreground mb-4">Benefício Corporativo</h4>
                  <p className="text-muted-foreground">Proteção adicional que complementa o pacote de benefícios da empresa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-8" data-testid="text-why-choose-title">
                Nossa Consultoria em Seguros de Vida
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-why-choose-description">
                Embora nosso foco principal sejam os planos de saúde, oferecemos consultoria especializada em seguros de vida como serviço complementar
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-background rounded-2xl p-8 shadow-lg text-center" data-testid="diferencial-consulta-personalizada">
                <div className="text-5xl mb-6">📈</div>
                <h4 className="text-xl font-display font-semibold text-foreground mb-4">Análise Especializada</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Avaliamos seu perfil de risco, necessidades familiares e orçamento para indicar a proteção mais adequada no mercado de seguros.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-8 shadow-lg text-center" data-testid="diferencial-comparacao-mercado">
                <div className="text-5xl mb-6">🔍</div>
                <h4 className="text-xl font-display font-semibold text-foreground mb-4">Comparação Transparente</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Comparamos as principais seguradoras do mercado, analisando coberturas, preços e condições para garantir a melhor escolha.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-8 shadow-lg text-center" data-testid="diferencial-suporte-completo">
                <div className="text-5xl mb-6">🤝</div>
                <h4 className="text-xl font-display font-semibold text-foreground mb-4">Suporte Integral</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Acompanhamos desde a contratação até eventuais sinistros, garantindo que você tenha todo o suporte necessário quando precisar.
                </p>
              </div>
            </div>
            
            <div className="bg-primary/5 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">Consultoria Sem Custos Adicionais</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Nossa consultoria em seguros de vida não gera nenhum custo extra para você. Recebemos remuneração diretamente das seguradoras, mantendo total transparência no processo.
              </p>
              <div className="text-sm text-muted-foreground">
                💡 <strong>Lembrete:</strong> Planos de saúde são nossa especialidade principal. Seguros de vida são um complemento que oferecemos.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground mb-8" data-testid="text-cta-insurance-title">
              Proteção Financeira Complementar
            </h2>
            <div className="w-24 h-1 bg-primary-foreground/30 mx-auto mb-8"></div>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="text-cta-insurance-description">
              Converse com nossos consultores sobre como um seguro de vida pode complementar seu plano de saúde, oferecendo proteção financeira completa para sua família.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link href="/contato">
                <Button variant="secondary" size="lg" className="px-12 py-4 text-lg font-semibold shadow-xl" data-testid="button-consultor-seguro">
                  Consultoria em Proteção
                </Button>
              </Link>
              <Link href="/planos-saude">
                <Button variant="outline" size="lg" className="px-12 py-4 text-lg font-semibold bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" data-testid="button-planos-principais">
                  Ver Planos de Saúde (Principal)
                </Button>
              </Link>
            </div>
            <div className="text-primary-foreground/70 text-sm">
              <div className="mb-2">ℹ️ <strong>Nosso foco principal:</strong> Planos de Saúde</div>
              <div><strong>Serviço complementar:</strong> Seguros de Vida</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
