<script>
  import StickerQuotes from '$lib/StickerQuotes.svelte';
  import BitcoinSvg from '$lib/assets/BitcoinSVG.svelte';
  import moneysupply from '$lib/assets/images/euro money supply.webp';
  import purchasingpower from '$lib/assets/images/purchasing power.png';
  import FAQ from '$lib/FAQ.svelte';
</script>

<header class="flex justify-between backdrop-blur-3xl">
  <!-- 8 equally sized boxes -->

  <div class="flex-1 w-1/8 relative h-24 bg-linke-red" />
  <div class="flex-1 w-1/8 h-24 relative bg-pirate-orange" />
  <div class="flex-1 w-1/8 h-24 relative bg-fdp-yellow" />
  <div class="flex-1 w-1/8 h-24 relative bg-green-klee" />
  <div class="flex-1 w-1/8 h-24 relative bg-afd-blue" />
  <div class="flex-1 w-1/8 h-24 relative bg-cdu-darkblue" />
  <div class="flex-1 w-1/8 h-24 relative bg-volt-violet" />

  <!-- Heading text overlay -->
  <h1
    class="absolute inset-0 flex items-center justify-center text-4xl font-bold"
  />
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

<!-- <StickerQuotes /> -->

<section class="text-white bg-cdu-darkblue m-0 max-w-full items-start p-20">
  <h2 class="  text-5xl p-5 font-inter tracking-tight">
    DAMIT UNSERE WIRTSCHAFT <span class="text-cdu-mint"
      >NICHT DIE KRISE KRIEGT.</span
    >
  </h2>
  <p>
    Das Thema Geld an sich ist oft kein Diskussionspunkt. In politischen
    Debatten und Wahlprogrammen dreht es sich in erster Linie darum, was man
    damit machen will. <br />
  </p>
  <p>
    <a
      href="https://www.sueddeutsche.de/wirtschaft/finanzkrise-kosten-deutschland-1.4126273"
      >2018</a
    >
    litten viele noch unter den Folgen der Finanzkrise, die wir bis heute zahlen.
    <br />Wie viele Krisen brauchen wir denn noch, bis sich wirklich was
    verändert?
  </p>
</section>

<section class="bg-afd-blue text-white p-10 max-w-full items-start">
  <h2 class="text-5xl py-5 font-roboto tracking-tight">Raus aus dem Euro!</h2>
  <p>
    Wir nutzen täglich den Euro, weil er als stabil gilt. Aber ist das wirklich
    so?
  </p>
  <img src={purchasingpower} alt="money supply of the euro" />
  <aside class="opacity-70 mb-4 text-right">
    Source: <a
      href="https://www.statista.com/statistics/1055948/value-euro-since-2000/"
      >Statista</a
    >
  </aside>
  <p>
    Der Euro setzt sich aus mehreren Geldformen M1-M4 zusammen. Jede davon
    wächst immer weiter, egal ob Krise oder nicht.
    <img src={moneysupply} alt="money supply of the euro" />
  </p>
  <aside class="opacity-70 mb-4 text-right">
    Source: <a href="https://www.european-inflation-tracker.com/supply/"
      >european-inflation-tracker.com</a
    >
  </aside>
  <p>
    Laut offiziellen Statistiken sieht die Realität anders aus. Seit der
    Einführung des Euros ist dessen Kaufkraft stetig gesunken, und die Geldmenge
    wurde stetig erhöht.
  </p>
  <p>
    Seit den Nachkriegsjahren gab es keine so hohe Inflation wie heute(SOURCE?).
    Selbst das offizielle Inflationsziel von 2% pro Jahr wirkt verheerend - 1000
    Euro auf dem Sparkonto sind schon nach etwa 5 Jahren nur noch ungefähr 905
    Euro wert.
  </p>
  <p>
    Viel mehr braucht es nicht um die Wichtigkeit von Bitcoin zu verstehen. Denn
    was dieser Zwang zu investieren mit jedem Bereich unserer Gesellschaft
    macht, ist unvorstellbar und kann von keiner Statistik quantifiziert werden.
  </p>
  <p>
    Laut eigenen Aussagen der EZB
    (https://www.ecb.europa.eu/home/search/review/html/price-stability-objective.de.html)
    ist eine gewisse Inflation gewollt. Zu hohe Inflation behindert das Sparen,
    zu niedrige hält Menschen davon ab, ihr Geld auszugeben.
  </p>
  <p>
    Würdest du mit 0% monetärer Inflation plötzlich aufhören, dein ganzes Geld
    auszugeben? Oder würdest du dir mehr Gedanken darüber machen, wirklich
    sinnvolle Investitionen in deine Zukunft zu tätigen, die mehr als nur Geld
    wert sind?
  </p>

  <h3 class="text-4xl mt-4">Wer profitiert davon?</h3>
  <ul class="list-disc">
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
</section>
<section class="bg-volt-violet p-5 text-white font-ubuntu">
  <h2 class="text-7xl font-ubuntubold p-3 mb-5">
    Stabile Währung wie in der Schweiz.
  </h2>
  <p>
    Volt ist <a href="https://www.voltdeutschland.org/themen">
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

<section class="bg-green-tanne text-green-sand p-5">
  <h2 class="text-7xl p-5 font-roboto tracking-tighter">
    Energiewende und Wirtschaft vereinen.
  </h2>
  <!-- <BitcoinSvg fillColor="#fff17a" backgroundColor="#005437" /> -->
  <p>
    Bitcoin wird in dieser Hinsicht oft kritisiert, da das System sehr viel
    Strom verbraucht. Und obwohl sich Prognosen zum Verbrauch immer wieder als
    falsch herausstellen, besteht weiterhin Skepsis.
    https://www.weforum.org/agenda/2017/12/bitcoin-consume-more-power-than-world-2020
    (need more examples)
  </p>
  <p>
    Faktisch sieht das anders aus: das Bitcoin Netzwerk bezieht einen
    beachtlichen Anteil seines Stromverbrauchst aus erneuerbaren Energien. Mit
    Mining ist ein globaler Markt entstanden, der sich den günstigsten Preis für
    Energie sucht.
  </p>
  <p>
    Ein Kohlekraftwerk ist irgendwann leer. Eine Solarzelle wird einmal gebaut
    und generiert ab dann so lange Strom, wie die Sonne scheint.
  </p>
</section>

<section class="bg-fdp-yellow p-5 text-black">
  <h2 class="text-fdp-blue text-7xl py-5 font-roboto tracking-tight">
    Das regelt der Markt.
  </h2>
  <p>
    Bitcoin wird immer wieder als <a
      class="text-fdp-magenta"
      href="https://www.finextra.com/blogposting/19256/cryptocurrency-is-dead-long-live-central-bank-digital-currency"
      >tot</a
    >, veraltet,
    <a
      href="https://www.thetimes.co.uk/article/cryptocurrencies-are-a-fad-best-avoided-despite-paypal-accepting-bitcoin-fk8rdq0tx"
      class="text-fdp-magenta">wertlos</a
    >
    und
    <a
      href="https://nypost.com/2019/06/29/bitcoin-not-built-to-last-despite-recent-surge/"
      class="text-fdp-magenta">nicht zukunftstauglich</a
    >
    deklariert.
    <br /> "Der Markt" sagt was anderes. Seit 2009 beweist Bitcoin, dass es auch
    ohne zentral gelenkte Geldpolitik geht. Wer auf kurzfristige Preisspekulationen
    setzt, ohne der Gesellschaft einen Mehrwert zu bieten, fliegt raus. Und das komplett
    ohne staatliche Eingriffe.
  </p>
</section>
<section class="bg-linke-red p-5">
  <span class=" text-white font-inter text-7xl tracking-tight p-5"
    >Zentralbanken enteignen!</span
  >
  <h3>Wer Geld verzockt, wird nicht gerettet.</h3>
  <p>
    Ich finde es schwierig, diese Aussage weniger radikal auszudrücken. Es kann
    nicht sein, dass private Verluste weiterhin sozialisiert werden.Ich hab
    keine Lust, an einer ewigen Wachstumspolitik festzuhalten. Wer Lust auf
    Casino hat, soll das selbst bezahlen.<br />
    Seit der Finanzkrise 2008 sind Kontrollen von Banken stärker geworden
  </p>

  <p>
    Bitcoin selbst hat keine Bankenrettungen. Wer sich entscheidet, mit
    Risikobehafteten Geschäften zu handeln, hat nichts zu melden wenn es doch
    nicht so gut läuft.
  </p>

  <p>
    Im Gegensatz dazu stehen staatliche Währungen wie der Euro - wer da Geld
    verzockt, muss nur die richtigen Leute kennen, und denen verkaufen, dass das
    private Geschäft Systemrelevant ist.
    https://www.sueddeutsche.de/wirtschaft/finanzkrise-kosten-deutschland-1.4126273
    <br /> Bei welcher Partei muss ich ein Kreuz machen, damit das aufhört?
  </p>
</section>

<section class="bg-pirate-orange p-5">
  <span class=" text-white bg-volt-violet text-5xl m-4 font-politics"
    >TRANSPARENTER ALS POLITIK</span
  >
  <p>
    Alle Transaktionen auf der Bitcoin-Blockchain sind nachverfolgbar, der
    Quellcode ist öffentlich einsehbar. Während die Zinspolitik der EZB schwer
    zu durschschauen ist, ist die Geldpolitik von Bitcoin jederzeit berechenbar
    und kann von jedem Teilnehmer des Netzwerks überprüft werden.
  </p>
</section>

<section>
  <div class="bg-blue-200 m-3 p-4 rounded-lg w-80">
    <h2 class="text-2xl font-semibold mb-4">Ein kleiner Vergleich</h2>
    <div class="flex justify-between items-center">
      <div class="text-gray-700 text-lg">Inflationsrate Euro:</div>
      <div class="text-green-600 text-lg">5.9%</div>
    </div>
    <div class="flex justify-between items-center mt-2">
      <div class="text-gray-700 text-lg">Inflationsrate Bitcoin:</div>
      <div class="text-yellow-600 text-lg">~1.8%</div>
    </div>
  </div>
</section>

<h2 class=" text-black text-3xl p-5">
  Stabiles Geld für Europa. Für alles andere gibt es den Euro.
</h2>

<h3 class="bg-partei-red text-white text-5xl p-5">
  Wählt bitcoin - es ist sehr gut!
</h3>

<FAQ />
