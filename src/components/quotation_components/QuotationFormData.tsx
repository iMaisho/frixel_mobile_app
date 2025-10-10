const QuotationFormData = [

  {
    id: "platform",
    type: "checkbox",

    title:
      "Pour quelle(s) plateforme(s) souhaitez-vous développer votre application ?",
    field: "platform",
    options: ["Android", "iOS", "Windows", "MacOS"],
  },

  {
    id: "hardware",
    type: "checkbox",

    title:
      "Sur quel(s) périphérique(s) souhaitez-vous développer votre application ?",
    field: "hardware",
    options: ["SmartPhone", "Tablette", "Application de Bureau", "Web"],
  },
  {
    id: "design",
    type: "boolean",

    title:
      "Souhaitez-vous être accompagné(e) pour le design de votre application ?",
    field: "design",
  },
  {
    id: "login",
    type: "boolean",

    title: "Avez-vous besoin d’un système d’inscription à votre application ?",
    field: "login",
  },
  // {
  //   id: "login-type",
  //   type: "radio",

  //   title: "Quels types d’inscription ?",
  //   field: "login-type",
  //   options: [
  //     "Email/Mot de passe",
  //     "MagicLink",
  //     "Facebook/Twitter/Google",
  //     "SMS",
  //   ],
  // },
  {
    id: "geolocation",
    type: "boolean",

    title:
      "Avez-vous besoin d’un système de géolocalisation dans votre application ?",
    field: "geolocation",
  },

  {
    id: "medias",
    type: "boolean",

    title:
      "Souhaitez-vous avoir la possibilité d’envoyer des photos et/ou des vidéos dans votre application ?",
    field: "medias",
  },

  {
    id: "chat",
    type: "boolean",

    title: "Votre application devra t-elle contenir un système de chat ?",
    field: "chat",
  },

  {
    id: "payment",
    type: "boolean",

    title: "Votre application devra t-elle contenir un système de paiement ?",
    field: "payment",
  },

  {
    id: "notifications",
    type: "boolean",

    title: "Votre application devra t-elle gérer des notifications ?",
    field: "notifications",
  },

  {
    id: "ads",
    type: "boolean",

    title:
      "Souhaitez-vous intégrer un SDK de publicité dans votre application ?",
    field: "ads",
  },
  {
    id: "analytics",
    type: "boolean",

    title:
      "Souhaitez-vous intégrer des analyses de données dans votre application ?",
    field: "analytics",
  },

  {
    id: "API",
    type: "radio",

    title:
      "Avez vous besoin d'accéder à des données extérieures à votre application grâce à une API ?",
    field: "API",
    options: [
      "Oui, et l'API doit être créée",
      "Oui, et l'API existe déjà",
      "Non",
    ],
  },

  {
    id: "backoffice",
    type: "boolean",

    title: "Souhaitez-vous un back-office pour administrer votre application ?",
    field: "backoffice",
  },
    {
    id: "message",
    type: "text",

    title: "Un message à nous laisser ?",
    placeholder: "Votre message ici...",
    field: "message",
    multiline: true,
  },
    {
    id: "email",
    type: "text",
    title: "Quelle est votre adresse email ?",
    placeholder: "exemple@email.com",
    field: "email",
    keyboardType: "email-address",
  },
];

export default QuotationFormData;
