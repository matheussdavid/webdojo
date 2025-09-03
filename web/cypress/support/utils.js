export function getTodayDate() {
    const hoje = new Date();
    return hoje.toLocaleDateString('pt-BR');
  }
