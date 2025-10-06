// {
//   title: "",
//   tags: [""],
//   author: "",
//   date: "",
//   image: require(""),
//   content: ""
// },

const BlogData = [
  {
    title: "Pourquoi utiliser Elixir quand on est une startup ?",
    tags: ["tuto", "business", "elixir"],
    author: "Johanne-Franck",
    date: "2025-07-18",
    image: require("../../assets/images/blog/phoenix_elixir.jpg"),
    content: `Vous êtes une jeune startup et vous souhaitez développer votre idée, qu’il s’agisse d’un **PoC**, un **prototype** ou encore un **MVP.**

Lorsque l’on est une startup, on se pose des milliers de questions. La difficulté essentielle est de bien distinguer les enjeux réels, qui vont mener à la survie d’abord, au succès ensuite.

Cet article ne va rien révéler d’inhabituel sur ce sujet, mais simplement rappeler quelques points essentiels :

1.  Votre startup doit **avoir un go-to-market rapide** (plus c’est long, plus les inconnues s’accumulent, plus les investisseurs s’inquiètent).

2.  **Votre produit va changer**. Plusieurs fois. Il faut pouvoir suivre, ré-écrire, pivoter. Rapidement.

3.  **Votre besoin métier est prioritaire**. Mais il ne doit pas engendrer une stack trop complexe, un écosystème applicatif qui nécessiterait 5 à 6 développeurs.

Abordons la réflexion du choix du langage et de l’écosystème applicatif sous l’angle de ces trois points.

Répondre au premier point semble trivial, il “suffit de coder vite”. Ou pas.

On code vite en Python par exemple, mais la permissivité du langage amène rapidement de la dette technique. Beaucoup. De la gestion de dépendances délicate dès que les librairies s’accumulent (monkey patch hell …).

Idem pour Go ou Rust, au-delà de l’aspect très bas niveau de ces langages (ce qui signifie plus de boiler plate code, et beaucoup de quantité de code avant d’arriver à un premier produit), la gestion des erreurs est un vrai sujet.

Les **langages fonctionnels** (comme Haskell ou Elixir) à contrario se positionnent de l’autre côté : tout est orienté data, la propagation des erreurs et le debug sont amplement simplifiés.

Mais un **go-to-market rapide**, c’est aussi aller _rapidement en Production_. Avoir votre fameux **démonstrateur**, pour séduire les investisseurs.

Les langages web sont souvent bien packagés pour cela. Ruby on Rails a par exemple été la stack de choix pour plusieurs startups à succès (AirBnb, Stripe, Coinbase…).

Elixir s’est fortement inspiré de Ruby, et en a tiré le meilleur (simplicité de syntaxe), tout en évitant les pièges qui rendent les challenges techniques difficiles à résoudre (explicit over implicit, meilleure maintenabilité, N+1 queries …).

**Quelques réussites signées Elixir** : Discord, Facebook Messenger, Whatsapp, Pinterest …

Le deuxième point est plus délicat : comment ré-écrire du code facilement ?

Elixir vient avec un premier coup de baguette magique (que d’autres langages et frameworks proposent aussi parfois) : le **scaffolding**, ou génération automatique de code. Idéal lorsque vous produisez votre premier modèle de données, et que vous devez visualiser rapidement.

Si votre rigueur de gestion de code (Git pour ne pas le citer) est bonne, ré-écrire devient un jeu d’enfant, une seule commande et vous re-générez tout !

Deuxième coup de baguette magique -mais il fera sans doute l’objet d’un futur article- **le code assisté par IA** (Claude aujourd’hui) : la simplicité de syntaxe d’Elixir le rend parfait pour un LLM ! Un choix d’avenir me direz-vous, et nous sommes bien d’accord.

Enfin, pouvoir ré-écrire simplement, se base parfois sur un principe simple : **un code maintenable est facilement évolutif**. Et les pincipes d’Elixir sont construits autour de ces postulats (cf génération de tests unitaires automatiquement avec le scaffolding, outils intégrés d’analyse statique de code, génération automatique de documentation, etc.).

Le troisième point, concernant la **couverture du besoin métier**, est sans doute l’un des plus difficiles à anticiper tant il s’agit de quelque chose qui va évoluer au cours de votre projet de startup.

Disposer d’une stack technologique qui permette d’y répondre sans ajouts ultérieurs est un gain de temps, mais aussi un gage de maintien de compétences assuré.

Balayer ici l’ensemble des points faibles des autres langages et frameworks associés relèverait d’une comparaison de cour d’école sans intérêt, lister à contrario les points forts d’Elixir et des couvertures de ses librairies vous éclairera sans doute :

- Votre projet nécessite des **interactions utilisateurs**, du **multi-tâches**, de l’**asynchrone** ? Elixir est conçu à l’origine pour cela (cf les premières startups qui se sont construites dessus), tous les processus sont concurrents par design, et la communication entre eux est un jeu d’enfant.

- Votre projet s’appuie sur du **traitement de données**, des **workflows**, de la **gestion d’états et des transactions longues** ? Elixir dispose pour chaque cas d’usage de librairies précises et extrêmement puissantes (Broadway, Oban, Exporer …).

- Vous avez besoin d‘une **SPA** (Single Page App), une application **temps-réel**, avec **système de notifications** ? Le framework web d’Elixir embarque nativement ce qui pour d’autres langages est une dépendance externe (cf LiveView).

- Vous avez des besoins technoogiques plus spécifiques : vous construisez un projet autour du **Machine Learning** ? Un projet **IoT** ? Là encore Elixir dispose de boîtes à outils intégrées pour égaler les best-in-class, si ce n’est les dépasser (Livebook, Scholar, Axon, Nerves….).

Un autre avantage “paradoxal” que les développeurs senior apprécieront : **le choix de librairies est limité**. Il n’existe pas, comme en Java (et maintenant aussi en Go ou Rust), 50 librairies pour répondre au même besoin. Les librairies incontournables, intégrées au cœur du langage, sont maintenues par une core team de quelques développeurs d’élite, testées et documentées, et adoubées par la communauté. Cela simplifie grandement les choix d’implémentation, et garantit souvent des architectures plus solides et maintenables.

Un dernier point non encore cité dans la réflexion, la disponibilité de talents.

Il est indéniable que Python, JS, Ruby … disposent d’un pool de développeurs bien plus grand qu’Elixir. Et cela restera probablement encore le cas pendant plusieurs années, la popularité d’Elixir est grande parmi les connaisseurs, parmi certains développeurs seniors, mais limitée auprès des débutants.

**Cela signifie aussi que le niveau de seniorité est grand dans cette communauté, souvent corrélé au niveau d’expertise**.

Et comme grâce au point 3, l’écosystème Elixir couvre souvent l’ensemble des besoins métiers, il faut peu de développeurs pour réaliser rapidement le prototype de vos rêves.

Reste à les trouver …

Mais finalement, vous faut-il des développeurs en interne ? Est-ce réellement votre besoin, pour construire le plus vite possible votre MVP, et aller chercher vos investisseurs ?

Si la réponse à cette question est non, alors arrêtez-vous, nous sommes une agence parisienne, spécialisée en Elixir, et nous nous ferons un plaisir de construire avec vous ce beau projet.

Au plaisir d’en discuter !

**Références:**

- 1 - Rapidité de développement ou [comment créer un équivalent de la plateforme X (anciennement Twitter) en 15 min ?](https://www.phoenixframework.org/blog/build-a-real-time-twitter-clone-in-15-minutes-with-live-view-and-phoenix-1-5)

* 2. En 2017, le CTO de discord **Stanislav Vishnevskiy** écrivait un [article](https://discord.com/blog/how-discord-scaled-elixir-to-5-000-000-concurrent-users) pour expliquer comment le server Discord avait été conçu pour supporter une charge de 5 millions d'utilisateurs en simultané.

* 3.  Pourquoi Spotify a basculé sur Elixir : [https://prograils.com/elixir-phoenix-liveview-spotify](https://prograils.com/elixir-phoenix-liveview-spotify)

* 4.  [Pourquoi Elixir est un bon choix pour les startup](https://blog.sequinstream.com/what-makes-elixir-great-for-startups/), par la startup Sequin

5.  [Pourquoi je parie encore sur Elixir](https://medium.com/beamworld/why-im-still-betting-on-elixir-in-2025-2ca26d4c52b4), par un développeur senior dans le milieu depuis 2016

6.  [Pourquoi Remote utilise Elixir](https://elixir-lang.org/blog/2025/01/21/remote-elixir-case/) : easy-to-code versus easy-to-scale

7.  Cas d’étude architecture et couverture fonctionnelle complète : [Veeps](https://elixir-lang.org/blog/2024/03/05/veeps-elixir-case/)
`,
  },
  {
    title: "Comment Pinterest a économisé 2 M$ par an grâce à Elixir",
    tags: ["elixir", "business"],
    author: "Antonin, Simon",
    date: "2025-07-18",
    image: require("../../assets/images/blog/pinterest_illustration.png"),
    content: `> Et si un changement de langage pouvait faire économiser plusieurs millions par an à votre entreprise ?
>
> C’est exactement ce qui est arrivé à Pinterest.

## Pinterest, victime de son succès (et de sa stack)

Comme beaucoup de géants du web, Pinterest s’est construit avec des technos classiques : Java, Python… Le genre de stack robuste, mais souvent gourmande en ressources.

Vers 2014–2015, l’entreprise est confrontée à un problème bien connu des plateformes à fort trafic : **le système de notifications push**.

Chaque interaction utilisateur déclenche des événements : nouvelle publication, commentaire, épingle sauvegardée… et des millions d’utilisateurs actifs attendent une notification en retour.

Mais derrière ce mécanisme apparemment simple se cache une réalité technique brutale :

- Des **pics de charge difficiles à gérer**.
- Une **infrastructure rigide** (Java) difficile à faire évoluer rapidement.
- Des **coûts d’infrastructure qui explosent**, notamment en bande passante et en nombre d’instances cloud.

Un ingénieur de Pinterest, **Steve Cohen**, explique que leur ancien système de notifications tournait sur **30 instances Java haute capacité** (c32.xl).

Et malgré cela, il tombait régulièrement en surcharge.

## Le pari Elixir : un test devenu une révélation

Face à ces limites, une petite équipe décide de tenter autre chose : **réécrire le service en Elixir**, un langage fonctionnel basé sur la machine virtuelle Erlang (la BEAM), conçu pour la concurrence massive et la résilience.

Pourquoi ce choix ? Parce qu’Elixir apporte :

- Un **modèle de concurrence natif**, capable de gérer des centaines de milliers de connexions simultanées.
- Une gestion des erreurs robuste.
- Une syntaxe claire et concise, idéale pour construire des systèmes complexes… sans complexité apparente.

Et les résultats ne se font pas attendre.

> “When we switched over to Elixir, we could run on 15 [instances] instead of 30.”
>
> — _Steve Cohen, Pinterest_

Mais ce n’est que le début. Une autre équipe réécrit un second service :

- De **200 serveurs Python**, ils passent à **4 serveurs Elixir** pour leur service anti-spam
- Le système est **plus rapide**, **plus stable**, **plus économique**.
- Et surtout : **aucune perte fonctionnelle**, bien au contraire.

Ces migrations se multiplient. Et en quelques mois, Pinterest réalise qu’**elle économise plus de 2 millions de dollars par an** rien qu’en infrastructure serveur, tout en augmentant la fiabilité du système.

> “The combined effect of better architecture and Elixir saved Pinterest over $2 million per year in server costs.”

## Pourquoi Elixir change vraiment la donne

L’histoire de Pinterest n’est pas un cas isolé. Plusieurs entreprises comme Bleacher Report, Discord ou Adobe (Frame.io) ont connu des résultats comparables après être passées à Elixir.

Mais alors, pourquoi ce langage fonctionne-t-il aussi bien dans ces contextes ?

1. **La BEAM (Erlang VM)**

   Chaque processus Elixir est ultraléger, indépendant, et supervisé. On peut en exécuter **des millions** sur une seule machine. Idéal pour du temps réel, de la messagerie, des websockets.

2. **Un modèle de crash-recovery intégré**

   Elixir ne cherche pas à éviter les erreurs à tout prix. Il les isole, les surveille, les redémarre proprement. Ce qui rend les systèmes plus tolérants par défaut.

3. **Une expressivité redoutable**

   Moins de code, plus de lisibilité. Les développeurs vont plus vite, font moins d’erreurs, et peuvent itérer rapidement.

4. **Des performances réseau au rendez-vous**

   Dans les cas comme les notifications, les économies se font sur la bande passante, la latence et l’usage mémoire. Pinterest a vu un **gain x10 par machine**.

## Ce que votre entreprise peut en retenir

Évidemment, ce n’est pas Elixir _seul_ qui fait gagner des millions. C’est le bon outil, combiné à une bonne architecture, au bon moment, grâce à des développeurs compétents.

Mais le constat est là :

💡 Dans les services à fort volume, où **la concurrence, la scalabilité et la résilience** sont critiques, **Elixir n’est pas juste un choix technique — c’est un choix stratégique**.

- Vous gérez des millions d’événements par jour ?
- Votre facture cloud commence à vous faire transpirer ?
- Vous voulez envoyer 1 million de notifications en quelques secondes ?

Alors vous avez peut-être plus à gagner avec Elixir que vous ne le pensiez.

## En conclusion

> Pinterest n’a pas choisi Elixir pour le plaisir.
>
> Ils l’ont choisi pour **faire mieux avec moins**, et ça a fonctionné.

Et si la performance, la résilience et l’économie devenaient des critères de choix de langage à part entière ?

Elixir ne promet pas des miracles. Mais pour ceux qui savent en tirer parti, c’est une **arme redoutable** dans un monde où l’infrastructure coûte cher, et où les systèmes doivent tenir debout à grande échelle.

## Sources

- [Paraxial.io – Elixir saves Pinterest $2 million/year](https://paraxial.io/blog/elixir-savings)
- [Medium – Why did Pinterest move to Elixir](https://medium.com/sourcescribes/why-did-pinterest-move-to-elixir-ee8a6d97b7c7)
`,
  },

  // {
  //   title: "",
  //   tags: [""],
  //   author: "",
  //   date: "",
  //   image: require(""),
  //   content: ""
  // },{
  //   title: "",
  //   tags: [""],
  //   author: "",
  //   date: "",
  //   image: require(""),
  //   content: ""
  // },{
  //   title: "",
  //   tags: [""],
  //   author: "",
  //   date: "",
  //   image: require(""),
  //   content: ""
  // },{
  //   title: "",
  //   tags: [""],
  //   author: "",
  //   date: "",
  //   image: require(""),
  //   content: ""
  // },
];

export default BlogData;
