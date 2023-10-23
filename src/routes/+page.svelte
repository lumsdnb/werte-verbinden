<script>
  import BitcoinSvg from '$lib/assets/BitcoinSVG.svelte';
  import moneysupply from '$lib/assets/images/euro money supply.webp';
  import purchasingpower from '$lib/assets/images/purchasing power.png';
  import InflationRate from '$lib/InflationRate.svelte';
</script>

<header class="flex justify-between backdrop-blur-3xl">
  <h1 class="invisible absolute top-0 left-0">
    Werte verbinden - das Thema was alle betrifft, aber kaum jemand drüber
    redet.
  </h1>
</header>

<section
  class="text-white min-h-screen lg:px-60 min-w-full bg-cdu-darkblue m-0 p-10 pt-16 w-full flex flex-col items-center justify-center md:px-20"
>
  <div class="max-w-5xl">
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
        Über Geld und wo es herkommt redet man nicht. In politischen Debatten
        und Wahlprogrammen dreht es sich in erster Linie darum, was man damit
        machen will. <br />
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
  </div>
</section>

<section
  class="flex min-w-full max-w-full flex-col items-center bg-afd-blue p-2 font-barlow text-white"
>
  <div class="sm:max-w-screen-sm md:max-w-5xl">
    <h2
      class="p-5 py-10 text-center font-roboto text-7xl tracking-tighter md:text-9xl lg:scale-125 lg:py-20"
    >
      Raus aus <br />dem Euro!
    </h2>
    <div class="mx-2 bg-white text-black md:p-16">
      <p class="px-5">
        Wir nutzen täglich den Euro, weil er als stabil gilt. Ist das wirklich
        so?
      </p>
      <div class="mb-4 flex flex-col justify-end py-3">
        <img src={purchasingpower} alt="money supply of the euro" />
        <aside class="px-5 text-right italic text-gray-100">
          <a
            href="https://www.statista.com/statistics/1055948/value-euro-since-2000/"
            >Statista</a
          >
        </aside>
      </div>
      <div class="md:px-20">
        <p class="px-5">
          Laut
          <a
            href="https://data.ecb.europa.eu/publications/money-credit-and-banking/3031796"
            >offiziellen Daten</a
          >
          sieht die Realität anders aus.
        </p>
        <p class="px-5">
          Der Euro setzt sich aus mehreren Geldformen M1-M4 zusammen. <br />
          Jede davon wächst immer weiter, egal ob Krise oder nicht.
        </p>
      </div>
      <img src={moneysupply} alt="money supply of the euro" />
      <aside class="mb-4 px-5 text-right text-gray-100">
        <a
          target="_blank"
          href="https://www.european-inflation-tracker.com/supply/"
          >european-inflation-tracker.com</a
        >
      </aside>

      <div class="flex flex-col md:flex-row mt-16">
        <InflationRate />
        <div class="flex flex-col gap-3">
          <p class="px-5">
            Seit den Nachkriegsjahren gab es keine so hohe Inflation wie
            <a
              class="font-bold"
              href="https://de.statista.com/themen/112/inflation/"
              >heute.
            </a>
          </p>
          <p class="px-5">
            Selbst das offizielle Inflationsziel von
            <a
              class="text-xl font-bold"
              href="https://www.ecb.europa.eu/home/search/review/html/price-stability-objective.de.html"
              >2%
            </a>pro Jahr wirkt verheerend -
            <span class="text-xl font-bold text-green-tanne saturate-50"
              >1000</span
            >
            Euro auf dem Sparkonto sind damit nach etwa 5 Jahren nur noch ungefähr
            <span class="text-xl font-bold text-cdu-red">905</span> Euro wert.
          </p>
        </div>
      </div>

      <div class="px-5">
        <h3 class="mt-4 py-3 text-4xl">Was macht das mit uns?</h3>
        <ul class="flex list-disc flex-col gap-2 pl-5 md:pl-10">
          <li>
            Vor der Finanzkrise 2008 gab es 2% Zinsen auf dem Sparbuch. Seitdem
            lohnt es sich nicht mehr, Geld zu sparen. Es lohnt sich mehr Um den
            wertverlust unserer ersparnisse auszugleichen, . fueher gabs mehr
            zinsen es lohnt sich mehr, das geld zu investieren. Wer es sich
            leisten kann, überlässt das dem Finanzberater. Der Rest muss das
            halt nach der Arbeit machen.
          </li>
          <li>Immobilien werden zu Wertanlagen, statt Wohnobjekten.</li>
          <li>
            Statt sich gründlich Gedanken zu nachhaltigen Investitionen zu
            machen, werden spekulative Geschäfte lukrativer.
          </li>
        </ul>

        <h3 class="mb-3 mt-10 text-4xl">Warum ist das so?</h3>
        <div
          class="flex flex-col gap-5 pb-5 md:flex-row md:items-center md:gap-10"
        >
          <p class="md:w-1/2">
            <a
              href="https://www.ecb.europa.eu/ecb/tasks/monpol/html/index.de.html"
              >Laut eigenen Aussagen der EZB</a
            > ist eine gewisse Inflation gewollt. Zu hohe Inflation entwertet das
            Ersparte. Doch wenn Geld immer mehr an mehr Wert gewinnt, verschiebt
            man seine Kaufentscheidungen in die Zukunft.
          </p>
          <p class="md:w-1/2">
            Würdest du mit 0% monetärer Inflation plötzlich aufhören, dein
            ganzes Geld auszugeben? Oder würdest du dir mehr Gedanken darüber
            machen, wirklich sinnvolle Investitionen in deine Zukunft zu
            tätigen,
            <span class="italic font-bold">
              die mehr als nur Geld wert sind?</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section
  class="lg:px-20 bg-volt-violet p-10 min-w-full text-white font-ubuntu flex flex-col items-center gap-3"
>
  <h2
    class="text-5xl lg:text-8xl max-w-4xl lg:py-20 scale-125 m-5 font-ubuntubold p-3 tracking-tight"
  >
    Stabile Währung wie in der Schweiz.
  </h2>
  <div class="px-0 md:px-10 md:mb-10 flex max-w-5xl flex-col gap-5 lg:flex-row">
    <p>
      Volt ist "überzeugt, dass gemeinsame Herausforderungen grenzübergreifende
      Lösungen brauchen. Wer es mit der Zukunft Europas ernst meint, muss
      europäisch denken und handeln." <a
        target="_blank"
        href="https://www.voltdeutschland.org/themen">*</a
      >
    </p>
    <p>
      Ich sehe das ähnlich und gehe noch einen Schritt weiter: wer es mit der
      Zukunft des Planeten ernst meint, muss global denken und handeln. Ein
      Geldsystem, was eine Minderheit nach Belieben steuern kann, sehe ich da
      nicht.
    </p>
    <p>
      Im Gegensatz zum Euro wird Bitcoin von seinen Teilnehmern kontrolliert.
      Jeder kann selbst prüfen, ob sich alle an die Regeln halten. Bitcoin macht
      nicht an irgendwelchen Ländergrenzen halt. Es interessiert sich auch nicht
      für deine Herkunft, oder deine Hautfarbe.
    </p>
  </div>
</section>

<section
  class="lg:px-20 min-w-full bg-green-tanne text-green-sand p-10 flex flex-col items-center justify-center gap-3"
>
  <div class="max-w-5xl flex flex-col gap-3 items-center">
    <h2
      class="lg:text-7xl md:max-w-xl text-left text-5xl scale-110 md:scale-125 md:p-5 sm:p-2 py-5 lg:py-10 font-roboto tracking-tighter"
    >
      Energiewende und Wirtschaft vereinen.
    </h2>
    <span class="relative left-44 -top-80 -z-10" />
    <!-- <BitcoinSvg fillColor="#fff17a" backgroundColor="#005437" /> -->
    <div class="flex flex-col lg:flex-row gap-5 lg:pb-20">
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
  </div>
</section>

<section
  class="lg:px-40 min-w-full bg-fdp-yellow p-10 flex flex-col justify-center items-center gap-3 lg:pb-20"
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
  <div class="flex flex-col md:flex-row gap-3 max-w-3xl">
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
<section
  class="lg:px-20 min-w-full bg-linke-red py-5 pb-0 mb-0 justify-center items-center flex flex-col"
>
  <h2
    class=" text-white relative -left-2 text-right scale-100 self-center font-inter text-5xl lg:text-9xl tracking-tighter p-10"
  >
    Zentralbanken <br /> enteignen!
  </h2>

  <div class=" max-w-5xl">
    <div class="bg-black text-white py-6 mb-0 text-center">
      <span class="mx-4 text-xl lg:text-3xl italic"
        >Wer Geld verzockt wird nicht gerettet.</span
      >
    </div>
    <article
      class="bg-white max-w-6xl text-black py-5 my-0 m-2 lg:flex justify-center items-center"
    >
      <p class="bg-white mx-10 py-3 pt-6">
        Ich finde es schwierig, diese Aussage weniger radikal auszudrücken. Es
        kann nicht sein, dass private Verluste weiterhin sozialisiert werden.
        Ich hab keine Lust, an einer ewigen Wachstumspolitik festzuhalten. Wer
        ins Casino will, soll das selbst bezahlen.
      </p>
      <p class="bg-white px-10 pb-3">
        Bitcoin selbst hat keine Bankenrettungen. Wer sich entscheidet, mit
        risikobehafteten Geschäften zu handeln, hat nichts zu melden wenn es
        doch nicht so gut läuft.
      </p>
      <div>
        <p class="bg-white text px-10 pb-3">
          Im Gegensatz dazu stehen staatliche Währungen wie der Euro. Wer da
          Geld verzockt, muss nur die richtigen Leute kennen, und denen
          verkaufen, dass das private Geschäft systemrelevant sei.
        </p>
      </div>
    </article>
    <p class="bg-white max-w-6xl font-black py-5 mt-0 px-5 m-2">
      Bei welcher Partei muss ich mein Kreuz machen, damit das endlich aufhört?
    </p>
  </div>
</section>

<section
  class="md:p-20 min-w-full bg-pirate-orange pb-10 px-3 flex flex-col items-center"
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

<section
  class="flex flex-col lg:mx-20 md:w-96 m-2 mb-0 p-0 border-black border-4"
>
  <div class="m-2 px-3 mb-0 py-1">
    <h2 class="font-partei text-black text-6xl py-3 pb-0">
      Stabiles Geld für Europa. Für alles andere gibt es den Euro.
    </h2>
  </div>

  <span
    class="bg-partei-red px-0 scale-110 lg:scale-105 relative top-1 m-0 text-white text-xl p-4 text-center"
  >
    Wählt Bitcoin - es ist sehr gut!
  </span>
</section>
