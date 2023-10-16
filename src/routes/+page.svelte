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
</header>

<section
  class="text-white min-h-screen lg:px-60 bg-cdu-darkblue m-0 p-10 pt-16 w-full flex flex-col items-center justify-center md:px-20"
>
  <h2 class=" md:text-8xl text-4xl scale-110 pb-5 font-inter tracking-tight">
    DAMIT UNSERE WIRTSCHAFT <span class="text-cdu-mint">
      <br />
      NICHT DIE KRISE KRIEGT.</span
    >
  </h2>
  <div
    class="md:min-w-fit flex flex-col md:flex-row md:items-center gap-y-5 gap-x-10 pt-10 md:minmin-w-fit md:w-10/12 md:py-20"
  >
    <p class="md:w-1/2 md:max-w-xs">
      Über Geld und wo es herkommt redet man nicht. In politischen Debatten und
      Wahlprogrammen dreht es sich in erster Linie darum, was man damit machen
      will. <br />
    </p>
    <p class="md:w-1/2 md:max-w-xs">
      <a
        target="_blank"
        href="https://www.sueddeutsche.de/wirtschaft/finanzkrise-kosten-deutschland-1.4126273"
        >2018</a
      >
      litten viele noch unter den Folgen der Finanzkrise von
      <span class="font-bold">2008</span>. Wir zahlen bis heute noch bleibende
      Schulden, die sich mit weiteren Krisen immer weiter aufsummieren.
    </p>

    <p class="md:w-1/2 md:max-w-xs">
      Wie viele Finanzkrisen brauchen wir denn noch, bis sich wirklich was
      nachhaltig verändert?
    </p>
  </div>
</section>

<section
  class="lg:px-60 flex min-h-screen flex-col items-center bg-afd-blue text-white p-2 max-w-full font-barlow"
>
  <h2
    class="md:text-9xl text-7xl font-roboto lg:scale-125 lg:py-20 tracking-tighter p-5 text-center py-10"
  >
    Raus aus <br />dem Euro!
  </h2>
  <div class=" bg-white text-black md:p-16 mx-2">
    <p class="px-5">
      Wir nutzen täglich den Euro, weil er als stabil gilt. Aber ist das
      wirklich so?
    </p>
    <div class="py-3 mb-4">
      <img src={purchasingpower} alt="money supply of the euro" />
      <aside class="px-5 italic text-gray-100 text-right">
        <a
          href="https://www.statista.com/statistics/1055948/value-euro-since-2000/"
          >Statista</a
        >
      </aside>
    </div>
    <div class="md:px-20">
      <p class="px-5">
        Laut <a
          href="https://data.ecb.europa.eu/publications/money-credit-and-banking/3031796"
          >offiziellen Daten</a
        > sieht die Realität anders aus.
      </p>
      <p class="px-5">
        Der Euro setzt sich aus mehreren Geldformen M1-M4 zusammen. <br />
        Jede davon wächst immer weiter, egal ob Krise oder nicht.
      </p>
    </div>
    <img src={moneysupply} alt="money supply of the euro" />
    <aside class="px-5 text-gray-100 mb-4 text-right">
      <a
        target="_blank"
        href="https://www.european-inflation-tracker.com/supply/"
        >european-inflation-tracker.com</a
      >
    </aside>

    <div class="md:flex md:gap-10 md:my-16">
      <section class="text-3xl w-2xl flex sm:items-center md:items-end">
        <div
          class="bg-blue-50 shadow-inner drop-shadow-sm inset-4 m-3 p-4 rounded-lg w-80"
        >
          <div class="flex justify-between items-center">
            <div class="text-gray-700">Inflationsrate Euro:</div>
            <a
              href="https://www.statista.com/statistics/225698/monthly-inflation-rate-in-eu-countries/"
              ><div class="text-linke-red font-black p-3">6.4%</div></a
            >
          </div>
          <div class="flex justify-between items-center mt-2">
            <div class="text-gray-700">Inflationsrate Bitcoin:</div>
            <a
              target="_blank"
              href="https://charts.woobull.com/bitcoin-inflation/"
            >
              <div class="text-pirate-orange font-black p-3">~1.8%</div>
            </a>
          </div>
        </div>
      </section>
      <div class="flex flex-col gap-3">
        <p class="px-5">
          Seit den Nachkriegsjahren gab es keine so hohe Inflation wie <a
            class="font-bold"
            href="https://de.statista.com/themen/112/inflation/"
            >heute
          </a>.
        </p>
        <p class="px-5">
          Selbst das offizielle Inflationsziel von
          <a
            class="text-xl font-bold"
            href="https://www.ecb.europa.eu/home/search/review/html/price-stability-objective.de.html"
            >2%
          </a>pro Jahr wirkt verheerend -
          <span class="text-green-tanne saturate-50 font-bold">1000</span> Euro
          auf dem Sparkonto sind damit nach etwa 5 Jahren nur noch ungefähr
          <span class="text-cdu-red font-bold">905</span> Euro wert.
        </p>
      </div>
    </div>
    <p class="px-5 md:m-5 mb-10 mt-3">
      Viel mehr braucht es gar nicht um die Wichtigkeit von Bitcoin zu
      verstehen. Denn was dieser Zwang zu investieren mit jedem Bereich unserer
      Gesellschaft macht, ist unvorstellbar und kann von keiner Statistik
      quantifiziert werden.
    </p>

    <div class="px-5">
      <h3 class="text-4xl py-3 mt-4">Was macht das mit uns?</h3>
      <ul class="list-disc pl-5 md:pl-10">
        <li>
          Menschen werden gezwungen, ihr Geld zu investieren. Wer es sich
          leisten kann, überlässt das dem Finanzberater. Der Rest muss das halt
          nach der Arbeit machen.
        </li>
        <li>Immobilien werden zu Wertanlagen, statt Wohnobjekten.</li>
        <li>
          Statt sich gründlich Gedanken zu nachhaltigen Investitionen zu machen,
          werden spekulative Geschäfte lukrativer. Warum warten, wenn der
          Wertverlust des eigenen Geldes vorprogrammiert ist?
        </li>
      </ul>
    </div>

    <section class="px-5">
      <h3 class="text-4xl mt-10 mb-3">Warum ist das so?</h3>
      <div
        class="flex flex-col gap-5 md:flex-row
      md:gap-10 pb-5 md:items-center"
      >
        <p class="md:w-1/2">
          Laut eigenen Aussagen der EZB ist eine gewisse Inflation gewollt. Zu
          hohe Inflation entwertet das Ersparte, zu niedrige hält Menschen davon
          ab, ihr Geld auszugeben. <a
            href="https://www.ecb.europa.eu/ecb/tasks/monpol/html/index.de.html"
            >Schließlich muss ja die Wirtschaft angekurbelt werden!</a
          >
        </p>
        <p class="md:w-1/2">
          Würdest du mit 0% monetärer Inflation plötzlich aufhören, dein ganzes
          Geld auszugeben? Oder würdest du dir mehr Gedanken darüber machen,
          wirklich sinnvolle Investitionen in deine Zukunft zu tätigen, die mehr
          als nur Geld wert sind?
        </p>
      </div>
    </section>
  </div>
</section>
<section
  class="lg:px-20 min-h-screen bg-volt-violet p-10 text-white font-ubuntu flex flex-col items-center gap-3"
>
  <h2
    class="text-5xl lg:text-8xl max-w-lg lg:py-20 scale-125 m-5 font-ubuntubold p-3 tracking-tight"
  >
    Stabile Währung wie in der Schweiz.
  </h2>
  <div class="px-0 md:px-10 md:mb-10 flex flex-col gap-5 lg:flex-row">
    <p>
      <a target="_blank" href="https://www.voltdeutschland.org/themen"
        >Volt ist
      </a>
      "überzeugt, dass gemeinsame Herausforderungen grenzübergreifende Lösungen brauchen.
      Wer es mit der Zukunft Europas ernst meint, muss europäisch denken und handeln."
    </p>
    <p>
      Ich sehe das ähnlich und gehe noch einen Schritt weiter: wer es mit der
      Zukunft des Planeten ernst meint, muss global denken und handeln. Ein
      Geldsystem, was eine Minderheit nach Belieben steuern kann, sehe ich da
      nicht.
    </p>
    <p>
      Im Gegensatz zum Euro wird Bitcoin wird von seinen Teilnehmern
      kontrolliert. Jeder mer des Netzwerks kann selbst prüfen, ob alle sich an
      die Regeln halten. Bitcoin macht nicht an irgendwelchen Ländergrenzen
      halt. Es interessiert sich auch nicht für deine Herkunft, oder deine
      Hautfarbe.
    </p>
  </div>
</section>

<section
  class="lg:px-20 min-h-screen bg-green-tanne text-green-sand p-10 flex flex-col items-center justify-center gap-3"
>
  <h2
    class="lg:text-7xl md:max-w-xl text-left text-5xl scale-110 md:scale-125 md:p-5 sm:p-2 py-5 lg:py-10 font-roboto tracking-tighter"
  >
    Energiewende und Wirtschaft vereinen.
  </h2>
  <span class="relative left-44 -top-80 -z-10" />
  <!-- <BitcoinSvg fillColor="#fff17a" backgroundColor="#005437" /> -->
  <div class="lg:flex gap-10 lg:pb-20">
    <p>
      Bitcoin wird in dieser Hinsicht oft kritisiert, da das System sehr viel
      Strom verbraucht. Und obwohl sich <a
        href="https://www.weforum.org/agenda/2017/12/bitcoin-consume-more-power-than-world-2020"
        >Prognosen zum Verbrauch</a
      > immer wieder als falsch herausstellen, besteht weiterhin Skepsis.
    </p>
    <p>
      Faktisch sieht es anders aus: das Bitcoin Netzwerk bezieht einen
      <a
        href="https://www.forbes.com/sites/seansteinsmith/2022/06/05/crypto-power-usage-is-helping-to-spur-renewable-energy-investments/"
        >beachtlichen Anteil</a
      > seines Stromverbrauchst aus erneuerbaren Energien, und fördert deren Ausbau
      ohne staatliche Subventionen.
    </p>
    <p>
      Mit Mining ist ein globaler Markt entstanden, der sich den günstigsten
      Preis für Energie sucht. Ein Kohlekraftwerk ist irgendwann leer. Eine
      Solarzelle wird einmal gebaut und generiert ab dann so lange Strom, wie
      die Sonne scheint.
    </p>
  </div>
</section>

<section
  class="lg:px-20 min-h-screen bg-fdp-yellow p-10 flex flex-col justify-center items-center gap-3 lg:pb-20"
>
  <h2
    class="text-fdp-blue text-6xl lg:text-9xl lg:py-20 scale-125 py-5 mb-7 font-roboto tracking-tight"
  >
    Das regelt <br />der
    <span
      class="underline decoration-8 decoration-fdp-magenta underline-offset-8"
      >Markt.</span
    >
  </h2>
  <div class="md:flex gap-10">
    <p class="md:w-10/12">
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
      Wer auf kurzfristige Preisspekulationen setzt, und der Gesellschaft keinen
      Mehrwert bietet, <a
        href="https://t.me/s/rektplebs"
        class="text-fdp-magenta font-bold"
        target="_blank">fliegt raus</a
      >. Und das komplett ohne staatliche Eingriffe.
    </p>
  </div>
</section>
<section class="lg:px-20 min-h-screen bg-linke-red py-5 flex flex-col">
  <h2
    class=" text-white relative -left-2 text-right scale-100 self-center font-inter text-5xl lg:text-9xl tracking-tighter p-10"
  >
    Zentralbanken enteignen!
  </h2>

  <div class="bg-black text-white py-6 mb-0 text-center">
    <span class="mx-4 text-xl lg:text-3xl italic"
      >Wer Geld verzockt wird nicht gerettet.</span
    >
  </div>

  <article class="bg-white py-5 mt-0 m-2 lg:flex justify-center items-center">
    <p class="  mx-10 py-3 pt-6">
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

<section
  class="md:p-20 w-full min-h-screen bg-pirate-orange pb-10 px-3 flex flex-col items-center justify-center"
>
  <h2
    class=" text-white mb-5 bg-black text-4xl md:text-7xl scale-110 max-w-fit p-3 font-politics text-center"
  >
    TRANSPARENTER ALS POLITIK
  </h2>
  <div
    class="flex flex-col md:flex-row items-center justify-center gap-7 md:gap-16 p-5"
  >
    <p class="md:max-w-xs">
      Alle Transaktionen auf der Bitcoin-Blockchain sind nachverfolgbar, der
      Quellcode ist <a
        class="text-volt-violet"
        href="https://github.com/bitcoin/bitcoin/blob/d2b8c5e1234cdaff84bd1f60aea598d219cdac5e/src/consensus/amount.h#L26"
        >öffentlich einsehbar</a
      >.
    </p>
    <p class="md:max-w-xs">
      Die Regeln des Geldsystems der EZB sind schwer zu durschschauen. Die von
      Bitcoin sind <a
        class="text-volt-violet"
        href="https://bitcoin.stackexchange.com/questions/48085/how-many-bitcoins-are-there-currently-in-circulation/48087#48087"
        >jederzeit berechenbar</a
      >.
    </p>
  </div>
</section>
<section class="flex flex-col lg:mx-20 md:w-96 m-2 p-0 border-black border-4">
  <div class="m-2 px-3 mb-0 py-1">
    <h2 class="font-partei text-black text-6xl py-3 pb-0">
      Stabiles Geld für Europa. Für alles andere gibt es den Euro.
    </h2>
  </div>
  <div class="flex flex-col p-5 gap-3 pb-5">
    <p>
      Früher war Geld einfach. Beträge waren nicht so groß, und die
      Finanznachrichten waren leicht zu verstehen. Doch heute? Da braucht man
      fast ein Mathematik Studium um die<a
        href="https://taz.de/Grundgesetzaenderung-fuer-die-Bundeswehr/!5860270/"
        >immer größer werdenden Zahlen</a
      > in den Nachrichten zu verstehen. Es scheint, als ob nach und nach immer mehr
      Nullen hinter der Zahl stehen.
    </p>
    <p>
      Zum Glück gibt es dieses Problem mit Bitcoin nicht - wir haben nur <span
        class="font-bold"
      >
        21 Millionen
      </span> davon! Zum einen kann man sich das super merken, zum anderen können
      wir es auch nicht mehr ändern. Für weniger Nullen im Finanzsystem!
    </p>
  </div>
  <span
    class="bg-partei-red px-0 scale-110 lg:scale-105 relative top-1 m-0 text-white text-xl p-4 text-center"
  >
    Wählt Bitcoin - es ist sehr gut!
  </span>
</section>
