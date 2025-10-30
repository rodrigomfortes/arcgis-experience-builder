# Widget Google Street View para ArcGIS Experience Builder

## 📋 Visão Geral

Este widget implementa uma integração **conforme aos Termos de Serviço do Google** entre o Google Street View e o ArcGIS Experience Builder. A solução utiliza a abordagem recomendada de **preview estático + hyperlink dinâmico** para garantir total conformidade legal.

## ✅ Conformidade Legal

- ✅ **Totalmente conforme** aos Termos de Serviço do Google Maps Platform
- ✅ **Não exibe** Street View interativo na mesma tela que mapas Esri
- ✅ **Abre Street View** em nova aba para experiência interativa
- ✅ **Preview estático** dentro da aplicação para contexto visual

## 🚀 Funcionalidades

### 1. **Street View Embed Interativo**
- Exibe Street View interativo diretamente no widget usando iframe
- Experiência completa e interativa sem sair da aplicação
- Usa a API Embed do Google Maps (custo: $7/1000 requisições)

### 2. **Coordenadas Detalhadas**
- Mostra latitude e longitude com 6 casas decimais
- Formato JavaScript pronto para uso
- Botão para copiar coordenadas

### 3. **Marcador no Mapa**
- Marcador visual no ponto clicado
- Sincronização com coordenadas

### 4. **Interface Responsiva**
- Iframe responsivo que se adapta ao tamanho do widget
- Transições suaves e efeitos visuais

## 🔧 Configuração

### 1. **Configurar Chave de API**
Edite o arquivo `src/config.ts`:
```typescript
const GOOGLE_MAPS_API_KEY = 'SUA_CHAVE_DE_API_AQUI'
```

### 2. **Configurar Restrições de Segurança**
No Google Cloud Console:
- **Restrições de Referenciador HTTP**: Adicione seus domínios
- **Restrições de API**: Apenas "Maps JavaScript API" e "Street View API"

### 3. **Configurar Widget**
1. Adicione o widget ao seu aplicativo
2. Selecione um widget de mapa no painel de configurações
3. Salve as configurações

## 💰 Custos da API

### Crédito Gratuito Mensal
- **$200 USD** por mês incluído
- **~28.500 embeds de Street View** gratuitos

### Custo por Uso
- **$7 USD** por 1.000 carregamentos de embed
- **Sem custo adicional** para interações dentro do embed

## 🎯 Casos de Uso

### Ideal Para:
- ✅ Aplicações que precisam de conformidade legal
- ✅ Preview rápido de localizações
- ✅ Integração com dados GIS existentes
- ✅ Experiência de usuário balanceada

### Não Recomendado Para:
- ❌ Aplicações que precisam de Street View sempre visível
- ❌ Integração visual direta (viola ToS)
- ❌ Aplicações sem chave de API do Google

## 🔄 Alternativas

### 1. **Expressão Arcade (Mais Simples)**
Use a expressão em `arcade-expression.txt` para criar hyperlinks diretos em pop-ups.

### 2. **Widget Embed (Preview Estático)**
Configure o widget Embed nativo do ExB com URL da API Static.

### 3. **Soluções de Terceiros**
Empresas como Geovonic oferecem widgets prontos.

## 📁 Estrutura do Projeto

```
street-view-widget/
├── manifest.json              # Manifesto do widget
├── icon.svg                   # Ícone do widget
├── config.json                # Configuração padrão
├── README.md                  # Este arquivo
├── arcade-expression.txt      # Expressão Arcade alternativa
└── src/
    ├── config.ts              # Configuração e chave de API
    ├── runtime/
    │   └── widget.tsx         # Componente principal
    ├── setting/
    │   └── setting.tsx        # Painel de configurações
    ├── types/
    │   └── google-maps.d.ts   # Declarações de tipos
    └── style.css              # Estilos do widget
```

## 🛠️ Desenvolvimento

### Pré-requisitos
- Node.js
- ArcGIS Experience Builder Developer Edition
- Chave de API do Google Maps

### Comandos
```bash
# Desenvolvimento
npm start

# Compilação para produção
npm run build:prod
```

## 📚 Referências

- [Google Maps Platform Terms of Service](https://cloud.google.com/maps-platform/terms)
- [ArcGIS Experience Builder Documentation](https://developers.arcgis.com/experience-builder/)
- [Google Street View API Documentation](https://developers.google.com/maps/documentation/streetview)

## ⚠️ Avisos Importantes

1. **Conformidade Legal**: Este widget foi projetado para ser totalmente conforme aos Termos de Serviço do Google
2. **Custos**: Monitore o uso da API no Google Cloud Console
3. **Segurança**: Configure restrições de referenciador HTTP
4. **Atualizações**: Mantenha-se atualizado com mudanças nos ToS

## 📞 Suporte

Para dúvidas sobre implementação ou conformidade legal, consulte:
- Documentação oficial do Google Maps Platform
- Fóruns da comunidade Esri
- Suporte técnico da Esri
