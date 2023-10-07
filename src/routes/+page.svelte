<script>
  import BitcoinSvg from '$lib/assets/BitcoinSVG.svelte';
  import moneysupply from '$lib/assets/images/euro money supply.webp';
  import purchasingpower from '$lib/assets/images/purchasing power.png';
  import ContactForm from '$lib/ContactForm.svelte';
  import FAQ from '$lib/FAQ.svelte';
  import RainbowLine from '$lib/RainbowLine.svelte';
</script>

<header class="flex justify-between backdrop-blur-3xl">
  <h1 class="invisible absolute top-0 left-0">
    Werte verbinden - das Thema was alle betrifft, aber niemand drüber redet.
  </h1>
  <!-- 8 equally sized boxes -->
</header>

<!-- <section class="m-5 max-w-2xl flex flex-col items-center">
  <blockquote class="gap-5text-xl italic font-se m ibold text-gray-900 m-10">
    <svg
      class="w-8 h-8 text-gray -400 dark:text-gray-600 m-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 18 14"
    >
      <path
        d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
      />
    </svg>
    bla
  </blockquote>
</section> -->

<section
  class="text-white lg:px-60 bg-cdu-darkblue m-0 p-10 pt-16 w-full flex flex-col items-center justify-center md:px-60"
>
  <h2 class=" md:text-8xl text-4xl scale-110 pb-5 font-inter tracking-tight">
    DAMIT UNSERE WIRTSCHAFT <span class="text-cdu-mint">
      <br />
      NICHT DIE KRISE KRIEGT.</span
    >
  </h2>
  <p>
    Über Geld und wo es herkommt redet man nicht. In politischen Debatten und
    Wahlprogrammen dreht es sich in erster Linie darum, was man damit machen
    will. <br />
  </p>
  <p>
    <a
      target="_blank"
      href="https://www.sueddeutsche.de/wirtschaft/finanzkrise-kosten-deutschland-1.4126273"
      >2018</a
    >
    litten viele noch unter den Folgen der Finanzkrise von
    <span class="font-bold">2008</span>. Wir zahlen bis heute noch bleibende
    Schulden, die sich mit weiteren Krisen immer weiter aufsummieren.
    <br />Wie viele Finanzkrisen brauchen wir denn noch, bis sich wirklich was
    nachhaltig verändert?
  </p>
</section>

<section class="lg:px-60 bg-afd-blue text-white p-2 max-w-full font-barlow">
  <h2
    class="md:text-9xl text-7xl font-roboto scale-110 lg:scale-125 lg:py-20 tracking-tight p-5 text-center py-10"
  >
    Raus aus <br />dem Euro!
  </h2>
  <div class=" bg-white text-black p-5">
    <p>
      Wir nutzen täglich den Euro, weil er als stabil gilt. Aber ist das
      wirklich so?
    </p>
    <div class="py-3 mb-4">
      <img src={purchasingpower} alt="money supply of the euro" />
      <aside class="italic text-gray-100 text-right">
        <a
          href="https://www.statista.com/statistics/1055948/value-euro-since-2000/"
          >Statista</a
        >
      </aside>
    </div>
    <p>
      Laut <a
        href="https://data.ecb.europa.eu/publications/money-credit-and-banking/3031796"
        >offiziellen Statistiken</a
      > sieht die Realität anders aus.
    </p>
    <p>
      Der Euro setzt sich aus mehreren Geldformen M1-M4 zusammen. Jede davon
      wächst immer weiter, egal ob Krise oder nicht.
      <img src={moneysupply} alt="money supply of the euro" />
    </p>
    <aside class="text-gray-100 mb-4 text-right">
      <a
        target="_blank"
        href="https://www.european-inflation-tracker.com/supply/"
        >european-inflation-tracker.com</a
      >
    </aside>

    <section class="text-2xl w-2xl flex sm:items-center md:items-end">
      <div class="bg-blue-200 m-3 p-4 rounded-lg w-80">
        <div class="flex justify-between items-center">
          <div class="text-gray-700">Inflationsrate Euro:</div>
          <a
            href="https://www.statista.com/statistics/225698/monthly-inflation-rate-in-eu-countries/"
            ><div class="text-green-600 font-black p-3">5.9%</div></a
          >
        </div>
        <div class="flex justify-between items-center mt-2">
          <div class="text-gray-700">Inflationsrate Bitcoin:</div>
          <a
            target="_blank"
            href="https://charts.woobull.com/bitcoin-inflation/"
          >
            <div class="text-yellow-600 font-black p-3">~1.8%</div>
          </a>
        </div>
      </div>
    </section>

    <p>
      Seit den Nachkriegsjahren gab es keine so hohe Inflation wie <a
        class="font-bold"
        href="https://de.statista.com/themen/112/inflation/"
        >heute
      </a>. <br />
      Selbst das offizielle Inflationsziel von
      <a
        class="text-xl font-bold"
        href="https://www.ecb.europa.eu/home/search/review/html/price-stability-objective.de.html"
        >2%
      </a>pro Jahr wirkt verheerend - 1000 Euro auf dem Sparkonto sind damit
      nach etwa 5 Jahren nur noch ungefähr 905 Euro wert.
    </p>
    <p>
      Viel mehr braucht es nicht um die Wichtigkeit von Bitcoin zu verstehen.
      Denn was dieser Zwang zu investieren mit jedem Bereich unserer
      Gesellschaft macht, ist unvorstellbar und kann von keiner Statistik
      quantifiziert werden.
    </p>

    <h3 class="text-4xl mt-4">Warum ist das so?</h3>
    <p>
      Laut eigenen Aussagen der EZB ist eine gewisse Inflation gewollt. Zu hohe
      Inflation behindert das Sparen, zu niedrige hält Menschen davon ab, ihr
      Geld auszugeben.
    </p>

    <p>
      Würdest du mit 0% monetärer Inflation plötzlich aufhören, dein ganzes Geld
      auszugeben? Oder würdest du dir mehr Gedanken darüber machen, wirklich
      sinnvolle Investitionen in deine Zukunft zu tätigen, die mehr als nur Geld
      wert sind?
    </p>

    <h3 class="text-4xl py-3 mt-4">Was macht das mit uns?</h3>
    <ul class="list-disc pl-5">
      <li>
        Menschen werden gezwungen, ihr Geld zu investieren. Wer es sich leisten
        kann, überlässt das dem Finanzberater. Der Rest muss das halt nach der
        Arbeit machen.
      </li>
      <li>Immobilien werden zu Wertanlagen, statt Wohnobjekten.</li>
      <li>
        Statt sich gründlich Gedanken zu nachhaltigen Investitionen zu machen,
        werden spekulative Geschäfte lukrativer. Warum warten, wenn der
        Wertverlust des eigenen Geldes vorprogrammiert ist?
      </li>
    </ul>
  </div>
</section>
<section
  class="lg:px-60 bg-volt-violet p-10 text-white font-ubuntu flex flex-col items-center gap-3"
>
  <h2 class="text-5xl lg:text-9xl lg:py-20 scale-125 m-5 font-ubuntubold p-3">
    Stabile Währung wie in der Schweiz.
  </h2>
  <p>
    Volt ist <a target="_blank" href="https://www.voltdeutschland.org/themen">
      "überzeugt, dass gemeinsame Herausforderungen grenzübergreifende Lösungen
      brauchen. Wer es mit der Zukunft Europas ernst meint, muss europäisch
      denken und handeln."
    </a>
  </p>
  <p>
    Ich sehe das ähnlich und gehe noch einen Schritt weiter: wer es mit der
    Zukunft des Planeten ernst meint, muss global denken und handeln. Ein
    Geldsystem, was eine Minderheit nach Belieben steuern kann, sehe ich da
    nicht.
  </p>
  <p>
    Bitcoin wird von seinen Teilnehmern kontrolliert. Jeder Teilnehmer des
    Netzwerks kann selbst prüfen, ob alle sich an die Regeln halten. Bitcoin
    macht nicht an irgendwelchen Ländergrenzen halt. Es interessiert sich auch
    nicht für deine Herkunft, oder deine Hautfarbe.
  </p>
</section>

<section
  class="lg:px-60 bg-green-tanne text-green-sand p-10 flex flex-col gap-3"
>
  <h2
    class="lg:text-9xl text-5xl scale-110 md:p-5 sm:p-2 py-5 font-roboto tracking-tighter"
  >
    Energiewende und Wirtschaft vereinen.
  </h2>
  <span class="relative left-44 -top-80 -z-10" />
  <!-- <BitcoinSvg fillColor="#fff17a" backgroundColor="#005437" /> -->
  <p>
    Bitcoin wird in dieser Hinsicht oft kritisiert, da das System sehr viel
    Strom verbraucht. Und obwohl sich <a
      href="https://www.weforum.org/agenda/2017/12/bitcoin-consume-more-power-than-world-2020"
      >Prognosen zum Verbrauch</a
    > immer wieder als falsch herausstellen, besteht weiterhin Skepsis.
  </p>
  <p>
    Faktisch sieht das anders aus: das Bitcoin Netzwerk bezieht einen
    <a
      href="https://www.forbes.com/sites/seansteinsmith/2022/06/05/crypto-power-usage-is-helping-to-spur-renewable-energy-investments/"
      >beachtlichen Anteil</a
    > seines Stromverbrauchst aus erneuerbaren Energien, und fördert deren Ausbau
    ohne staatliche Subventionen.
  </p>
  <p>
    Mit Mining ist ein globaler Markt entstanden, der sich den günstigsten Preis
    für Energie sucht. Ein Kohlekraftwerk ist irgendwann leer. Eine Solarzelle
    wird einmal gebaut und generiert ab dann so lange Strom, wie die Sonne
    scheint.
  </p>
</section>

<section class="lg:px-60 bg-fdp-yellow p-10 flex flex-col items-center gap-3">
  <h2
    class="text-fdp-blue text-6xl lg:text-9xl lg:py-20 scale-125 py-5 mb-7 font-roboto tracking-tight"
  >
    Das regelt <br />der
    <span
      class="underline decoration-8 decoration-fdp-magenta underline-offset-8"
      >Markt.</span
    >
  </h2>
  <p>
    Bitcoin wird immer wieder als <a
      class="text-fdp-magenta font-bold"
      href="https://www.finextra.com/blogposting/19256/cryptocurrency-is-dead-long-live-central-bank-digital-currency"
      >tot</a
    >,
    <a
      href="https://www.thetimes.co.uk/article/cryptocurrencies-are-a-fad-best-avoided-despite-paypal-accepting-bitcoin-fk8rdq0tx"
      class="text-fdp-magenta font-bold">wertlos</a
    >
    oder
    <a
      href="https://nypost.com/2019/06/29/bitcoin-not-built-to-last-despite-recent-surge/"
      class="text-fdp-magenta font-bold">nicht zukunftstauglich</a
    >
    deklariert.
  </p>
  <p>
    "Der Markt" sagt etwas anderes. <i>Seit 2009</i> beweist Bitcoin, dass es auch
    ohne zentral gelenkte Geldpolitik geht.
  </p>
  <p>
    Wer auf kurzfristige Preisspekulationen setzt, ohne der Gesellschaft einen
    Mehrwert zu bieten, fliegt raus. Und das komplett ohne staatliche Eingriffe.
  </p>
</section>
<section class="lg:px-60 bg-linke-red py-5 flex flex-col">
  <h2
    class=" text-white relative -left-2 text-right self-center font-inter text-5xl lg:text-9xl tracking-tighter p-5"
  >
    Zentralbanken enteignen!
  </h2>

  <div class="bg-black text-white py-6 mb-1 text-center">
    <span class="mx-4 text-xl lg:text-3xl"
      >Wer Geld verzockt wird nicht gerettet.</span
    >
  </div>

  <article class="m-2 mb-1">
    <p class=" bg-white px-10 py-3 pt-6">
      Ich finde es schwierig, diese Aussage weniger radikal auszudrücken. Es
      kann nicht sein, dass private Verluste weiterhin sozialisiert werden. Ich
      hab keine Lust, an einer ewigen Wachstumspolitik festzuhalten. Wer ins
      Casino will, soll das selbst bezahlen.
    </p>
    <p class="bg-white px-10 pb-3">
      Bitcoin selbst hat keine Bankenrettungen. Wer sich entscheidet, mit
      risikobehafteten Geschäften zu handeln, hat nichts zu melden wenn es doch
      nicht so gut läuft.
    </p>
    <p class="bg-white px-10 pb-3">
      Im Gegensatz dazu stehen staatliche Währungen wie der Euro - wer da Geld
      verzockt, muss nur die richtigen Leute kennen, und denen verkaufen, dass
      das private Geschäft systemrelevant sei.
      <br /> Bei welcher Partei muss ich ein Kreuz machen, damit das aufhört?
    </p>
  </article>
</section>

<section class="lg:px-60 bg-pirate-orange pb-10 px-3">
  <h2
    class=" text-white bg-black text-4xl lg:text-9xl scale-110 max-w-fit p-5 font-politics text-center relative top-10"
  >
    TRANSPARENTER ALS POLITIK
  </h2>
  <p class="p-10 pt-20">
    Alle Transaktionen auf der Bitcoin-Blockchain sind nachverfolgbar, der
    Quellcode ist öffentlich einsehbar. Während die Zinspolitik der EZB schwer
    zu durschschauen ist, ist die Geldpolitik von Bitcoin jederzeit berechenbar
    und kann von jedem Teilnehmer des Netzwerks überprüft werden.
  </p>
</section>
<section class="lg:mx-60 m-2 mb-10 p-0 border-black border-4">
  <div class="m-2 px-3 mb-0 py-1">
    <h2 class="font-partei text-black text-6xl py-4 pb-0">
      Stabiles Geld für Europa. Für alles andere gibt es den Euro.
    </h2>
  </div>
  <h3
    class="bg-partei-red px-0 scale-110 lg:scale-105 relative top-1 m-0 text-white text-xl p-4 text-center"
  >
    Wählt Bitcoin - es ist sehr gut!
  </h3>
</section>
