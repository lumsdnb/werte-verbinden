<script>
  import StickerQuotes from '$lib/StickerQuotes.svelte';
  import BitcoinSvg from '$lib/assets/BitcoinSVG.svelte';
  import moneysupply from '$lib/assets/images/euro money supply.webp';
  import purchasingpower from '$lib/assets/images/purchasing power.png';
  import FAQ from '$lib/FAQ.svelte';
</script>

<header>
  <h1
    class="py-12 pt-24 text-center bg-gradient-to-r from-afd-blue to-afd-gradient-second"
  >
    <span class="text-1xl font-bold text-transparent bg-clip-text text-white">
      werteverbinden.org
      <BitcoinSvg />
    </span>
  </h1>
  <p>wir teilen</p>
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

<section class="m-10 max-w-screen-sm items-start">
  <h2 class="text-5xl my-6">Damit unsere Wirtschaft nicht die Krise kriegt.</h2>
  <p>
    Das Thema Geld an sich ist oft kein Diskussionspunkt. In politischen
    Debatten und Wahlprogrammen dreht es sich in erster Linie darum, was man
    damit machen will. <br />
    Wir nutzen täglich den Euro, weil er als stabil gilt. Aber ist das wirklich so?
  </p>
  <img src="" alt="" />
  <img src={purchasingpower} alt="money supply of the euro" />
  <aside>
    Source: <a
      href="https://www.statista.com/statistics/1055948/value-euro-since-2000/"
      >Statista</a
    >
  </aside>
  <p>
    <img src={moneysupply} alt="money supply of the euro" />
    Laut offiziellen Statistiken sieht die Realität anders aus. Seit der Einführung
    des Euros ist dessen Kaufkraft stetig gesunken, und die Geldmenge wurde stetig
    erhöht.
  </p>
</section>
<StickerQuotes />

<section class="m-10 max-w-screen-sm items-start">
  <h2 class="text-5xl my-6">Damit unsere Wirtschaft nicht die Krise kriegt.</h2>
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

  <h3 class="text-1xl">Wer profitiert von dieser Entscheidung?</h3>
  <ul>
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

  <h2>Stabile Währung wie in der Schweiz.</h2>
  <p>
    Volt ist "überzeugt, dass gemeinsame Herausforderungen grenzübergreifende
    Lösungen brauchen. Wer es mit der Zukunft Europas ernst meint, muss
    europäisch denken und handeln." (https://www.voltdeutschland.org/themen)
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

<section>
  <h2>Energiewende und Wirtschaft vereinen.</h2>
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
    Energie sucht. W
  </p>
  <p>
    Ein Kohlekraftwerk ist irgendwann leer. Eine Solarzelle wird einmal gebaut
    und generiert ab dann so lange Strom, wie die Sonne scheint.
  </p>
</section>

<section>
  <h2>Das regelt der Markt.</h2>
  <p>
    Bitcoin wird immer wieder als tot, veraltet und nicht zukunftstauglich
    deklariert. https://99bitcoins.com/bitcoin-obituaries/
    <br /> "Der Markt" sagt was anderes. Seit 2009 beweist Bitcoin, dass es auch
    ohne zentral gelenkte Geldpolitik geht. Kurzfristige Preisschwankungen von bis
    zu 90% sprechen auf den ersten Blick dagegen, doch auf lange Sicht hat sich ...
  </p>
</section>
<section>
  <h2>Zentralbanken enteignen!</h2>
  <h3>Wer Geld verzockt, wird nicht gerettet.</h3>
  **

  <p>
    Ich finde es schwierig, diese Aussage weniger radikal auszudrücken. Ich bin
    immer noch enttäuscht, dass es keine Blockupy Demos mehr gibt. Zum Glück
    gibt es seit 2009 auch eine Alternative, die kein Handeln von Politikern
    erfordert.
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

<section>
  <h2>Es geht auch anders</h2>
  <p>
    Transparenter als Politik."** Alle Transaktionen auf der Bitcoin-Blockchain
    sind transparent und für alle einsehbar. Während die Zinspolitik der EZB
    schwer zu durschschauen ist, ist die Geldpolitik von Bitcoin durch den
    Quellcode jederzeit berechenbar. Wer nicht weiß, wie das geht, fragt den
    Informatiker seines Vertrauens.
  </p>
</section>

<section>
  <div class="bg-blue-200 p-4 rounded-lg shadow-md w-1/3">
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

<section>
  <h2>Und wo ist der Haken?</h2>
  <p />
</section>

<FAQ />
