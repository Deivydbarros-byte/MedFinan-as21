import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly currentYear = signal(new Date().getFullYear());
  readonly plans = signal([
    {
      name: 'Essencial',
      price: 'Análise Inicial',
      description: 'Para o médico que busca clareza e organização financeira.',
      features: [
        'Diagnóstico financeiro completo',
        'Organização de orçamento pessoal',
        'Planejamento de fluxo de caixa',
        'Revisão de dívidas e crédito'
      ],
      popular: false
    },
    {
      name: 'Avançado',
      price: 'Crescimento Acelerado',
      description: 'Otimização de investimentos e planejamento tributário.',
      features: [
        'Tudo do plano Essencial',
        'Estratégias de investimento personalizadas',
        'Planejamento tributário para médicos',
        'Proteção patrimonial'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: 'Legado & Aposentadoria',
      description: 'Construção de patrimônio sólido e planejamento sucessório.',
      features: [
        'Tudo do plano Avançado',
        'Planejamento para aposentadoria',
        'Gestão de patrimônio global',
        'Planejamento sucessório e de legado'
      ],
      popular: false
    }
  ]);

  scrollToPlans() {
    const element = document.getElementById('planos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  requestDiagnosis(planName) {
    // In a real application, this would open a contact form, a modal, or navigate to a scheduling page.
    alert(`Ótima escolha! Entraremos em contato para agendar seu diagnóstico gratuito do plano ${planName}.`);
  }
}