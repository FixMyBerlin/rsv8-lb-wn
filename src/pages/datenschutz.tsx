import { PageProps } from 'gatsby'
import React from 'react'
import { MetaTags } from '~/components/MetaTags'
import { LayoutArticle } from '~/components/Layout'
import { TableOfContents, TocHashLink } from '~/components/TableOfContents'
import { H1, LinkMail } from '~/components/Text'

/*
Links
- Google Docs to HTML: https://www.gdoctohtml.com/
- Original Dokument https://docs.google.com/document/d/1Ntx2z3UxRxuXf12HSTpBPj27vFTkzjbP2G9ayNUFj0I/edit
*/

export const Head = () => <MetaTags noindex title="Datenschutz" />

const DatenschutzPage: React.FC<PageProps> = ({ location }) => {
  const tocItems: TocHashLink = [
    ['#responsible', 'Verantwortlichkeit'],
    ['#thirdparty', 'Drittdienste'],
    ['#hosting', 'Bereitstellung'],
    ['#contact', 'Kontaktmöglichkeit'],
    ['#rights', 'Ihre Rechte'],
    ['#updates', 'Aktualität und Änderungen'],
  ]

  return (
    <LayoutArticle location={location}>
      <H1 showTopline>Datenschutzerklärung</H1>
      <TableOfContents items={tocItems} />

      <h2 id="responsible">Einleitung</h2>
      <p>
        Mit den nachfolgenden Informationen wollen wir Ihnen einen Überblick
        über die Verarbeitung Ihrer personenbezogenen Daten auf unserer Website
        radschnellweg8-lb-wn.de (nachfolgend „Website“ genannt) geben. Wir
        wollen Sie ebenfalls über Ihre Rechte aus dem Datenschutzrecht
        informieren. Die Verarbeitung Ihrer personenbezogenen Daten durch uns
        erfolgt stets im Einklang mit der Datenschutzgrundverordnung
        (nachfolgend „DSGVO“ genannt) sowie allen geltenden landesspezifischen
        Datenschutzbestimmungen.
      </p>
      <h2 id="thirdparty">Verantwortlichkeit</h2>
      <h3>Verantwortlich im Sinne der DSGVO</h3>
      <p>
        <strong>Landratsamt Ludwigsburg</strong>
        <br /> Fachbereich 30 Straßen <br />
        Hindenburgstraße 40 <br />
        71638 Ludwigsburg <br />
        E-Mail: <LinkMail>radverkehr@landkreis-ludwigsurg.de</LinkMail> <br />
        Telefon: +49 7141 144-44700
      </p>
      <h3>Datenschutzbeauftragter</h3>
      <p>
        Unseren Datenschutzbeauftragten erreichen Sie unter{' '}
        <LinkMail>datenschutz@landkreis-ludwigsburg.de</LinkMail> und Tel. +40
        7141 144-0
      </p>
      <p>
        Sie können sich jederzeit bei allen Fragen und Anregungen zum
        Datenschutz sowie zur Ausübung Ihrer Rechte direkt an unsere
        Datenschutzbeauftragten wenden.
      </p>
      <h3>Einsatz von Drittdiensten</h3>
      <p>
        Für bestimmte Funktionen und Services auf unserer Website setzen wir
        Dienste von Drittanbietern ein. Die konkreten Dienste können jeweils den
        entsprechenden Kapiteln entnommen werden.
      </p>
      <p>
        Teilweise setzen wir Dienstleister ein, die ihren Sitz in einem
        Drittland haben, also außerhalb der EU. Wir übermitteln Daten nur in ein
        Drittland, in denen ein angemessenes Datenschutzniveau bzw. geeignete
        Garantien i. S. d. Art. 44-49 DSGVO vorliegen. Sie haben das Recht eine
        Kopie der von uns getroffenen geeigneten Garantien anzufordern.
        Schreiben Sie uns dazu gerne eine E-Mail an die in diesen
        Datenschutzhinweisen genannte E-Mail-Adresse.
      </p>

      <h2 id="hosting">Bereitstellung der Website</h2>

      <h3>Allgemeine Informationen</h3>

      <p>
        Bei Besuch unserer Website werden automatisch Daten verarbeitet, die Ihr
        Browser an unseren Server übermittelt. Diese allgemeinen Daten und
        Informationen werden in den Logfiles des Servers gespeichert (in sog.
        &bdquo;Server-Logfiles&ldquo;). Erfasst werden können die
      </p>
      <ul>
        <li>Browsertyp und Browserversion</li>
        <li>verwendetes Betriebssystem</li>
        <li>Referrer URL (zuvor besuchte Website)</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Datum und Uhrzeit der Serveranfrage</li>
        <li>IP-Adresse</li>
      </ul>

      <h3>Zweck der Verarbeitung</h3>

      <p>
        Bei der Nutzung dieser allgemeinen Daten und Informationen ziehen wir
        keine Rückschlüsse auf Ihre Person. Zu den von uns verfolgten Zwecken
        gehört insbesondere:
      </p>
      <ul>
        <li>
          die Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,
        </li>
        <li>die Aufklärung von Missbrauchs- oder Betrugshandlungen,</li>
        <li>Problemanalysen im Netzwerk, sowie</li>
        <li>die Auswertung der Systemsicherheit und -stabilität.</li>
      </ul>

      <h3>Rechtsgrundlage</h3>
      <p>
        Wir verarbeiten Ihre Daten zur Wahrnehmung einer Aufgabe, die im
        öffentlichen Interesse liegt (Art. 6 Abs. 1 lit. e) DSGVO i. V. m. §17
        LDSG BW). Die Weitergabe von Informationen über die
        Verkehrsinfrastruktur in unserem Bundesland ist Teil unserer
        Öffentlichkeitsarbeit.
      </p>

      <h3>Speicherdauer</h3>
      <p>
        Die Logfiles werden aus Sicherheitsgründen (z.B. zur Aufklärung von
        Missbrauchs- oder Betrugshandlungen) für die Dauer von maximal 30 Tagen
        gespeichert und danach gelöscht. Daten, deren weitere Aufbewahrung zu
        Beweiszwecken erforderlich ist, werden bis zur endgültigen Klärung der
        Angelegenheit aufbewahrt.
      </p>

      <h3>Empfänger personenbezogener Daten</h3>
      <p>
        Unsere Website wird nicht von uns selbst gehostet, sondern bei einem
        Dienstleister, der für den Zweck der Bereitstellung der Website die
        zuvor genannten Daten in unserem Auftrag gem. Art. 28 DSGVO verarbeitet.
        Wir setzen dazu folgende Dienstleister ein:
      </p>
      <table>
        <thead>
          <tr>
            <th>Anbieter</th>
            <th>Anschrift</th>
            <th>Drittland</th>
            <th>Geeignete Garantie</th>
            <th>Zweck</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Netlify, Inc.</td>
            <td>2325 3rd Street, Suite 215, San Francisco, 94107 CA</td>
            <td>USA</td>
            <td>Standarddatenschutzklauseln</td>
            <td>Hosting der Website und Bereitstellung der Inhalte</td>
          </tr>
          <tr>
            <td>Amazon Web Services EMEA SARL</td>
            <td>38 Avenue John F. Kennedy, L-1855 Luxembourg</td>
            <td>Luxemburg</td>
            <td>Standarddatenschutzklauseln</td>
            <td>Hosting der Website und Bereitstellung der Inhalte</td>
          </tr>
        </tbody>
      </table>

      <h2 id="contact">Kontaktmöglichkeiten</h2>

      <h3>Allgemeine Informationen</h3>
      <p>
        Über unsere Website weisen wir auf die Möglichkeit hin, uns per E-Mail
        zu kontaktieren.Im Rahmen der Kontaktaufnahme und Beantwortung Ihrer
        Anfrage verarbeiten wir folgende personenbezogene Daten von Ihnen:
      </p>
      <ul>
        <li>Name</li>
        <li>E-Mail</li>
        <li>Datum und Zeit der Anfrage</li>
        <li>Meta-Daten der E-Mail</li>
        <li>
          Weitere personenbezogene Daten, die Sie uns im Rahmen der
          Kontaktaufnahme mitteilen.
        </li>
      </ul>

      <h3>Zweck der Verarbeitung</h3>
      <p>
        Wir verarbeiten Ihre Daten zur Beantwortung Ihrer Anfrage sowie andere
        daraus resultierende Sachverhalte.
      </p>

      <h3>Rechtsgrundlage</h3>
      <p>
        Wenn Ihre Anfrage unabhängig von vertraglichen oder vorvertraglichen
        Maßnahmen erfolgt, stellen unsere überwiegenden berechtigten Interessen
        gem. Art. 6 Abs. 1 S. 1 lit. f DSGVO die Rechtsgrundlage dar. Das
        überwiegende berechtigte Interesse liegt in der Notwendigkeit,
        geschäftliche Korrespondenz zu beantworten.
      </p>

      <h3>Speicherdauer</h3>
      <p>
        Wir löschen Ihre personenbezogenen Daten, sobald sie für die Erreichung
        des Zweckes der Erhebung nicht mehr erforderlich sind. Im Rahmen von
        Kontaktanfragen ist dies grundsätzlich dann der Fall, wenn sich aus den
        Umständen ergibt, dass der konkrete Sachverhalt abschließend bearbeitet
        ist. Darüber hinaus speichern wir E-Mails, sofern und solange sie
        gesetzlichen Aufbewahrungsfristen unterliegen.
      </p>

      <h2 id="rights">Ihre Rechte</h2>

      <h3>Recht auf Bestätigung</h3>
      <p>
        Sie haben das Recht, von uns eine Bestätigung darüber zu verlangen, ob
        Sie betreffende personenbezogene Daten verarbeitet werden.
      </p>

      <h3>Auskunft (Art. 15 DSGVO)</h3>
      <p>
        Sie haben das Recht, jederzeit von uns unentgeltliche Auskunft über die
        zu Ihrer Person gespeicherten personenbezogenen Daten sowie eine Kopie
        dieser Daten nach Maßgabe der gesetzlichen Bestimmungen zu erhalten.
      </p>

      <h3>Berichtigung (Art. 16 DSGVO)</h3>
      <p>
        Sie haben das Recht, die Berichtigung Sie betreffender unrichtiger
        personenbezogener Daten zu verlangen. Ferner steht Ihnen das Recht zu,
        unter Berücksichtigung der Zwecke der Verarbeitung, die
        Vervollständigung unvollständiger personenbezogener Daten zu verlangen.
      </p>

      <h3>Löschung (Art. 17 DSGVO)</h3>
      <p>
        Sie haben das Recht, von uns zu verlangen, dass personenbezogenen Daten,
        die sie betreffen, unverzüglich gelöscht werden, wenn einer der
        gesetzlich vorgesehenen Gründe zutrifft und soweit die Verarbeitung bzw.
        Speicherung nicht erforderlich ist.
      </p>

      <h3>Einschränkung der Verarbeitung (Art. 18 DSGVO)</h3>
      <p>
        Sie haben das Recht, von uns die Einschränkung der Verarbeitung zu
        verlangen, wenn eine der gesetzlichen Voraussetzungen gegeben ist.
      </p>

      <h3>Datenübertragbarkeit (Art. 20 DSGVO)</h3>
      <p>
        Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die
        Sie uns bereitgestellt haben, in einem strukturierten, gängigen und
        maschinenlesbaren Format zu erhalten. Weiterhin haben Sie das Recht,
        diese Daten einem anderen Verantwortlichen ohne Behinderung durch uns,
        dem die personenbezogenen Daten bereitgestellt wurden, zu übermitteln,
        sofern die Verarbeitung auf der Einwilligung gem. Art. 6 Abs. 1 S. 1
        lit. a DSGVO oder Art. 9 Abs. 2 lit. a DSGVO oder auf einem Vertrag gem.
        Art. 6 Abs. 1 S. 1 lit. b DSGVO beruht und die Verarbeitung mithilfe
        automatisierter Verfahren erfolgt, sofern die Verarbeitung nicht für die
        Wahrnehmung einer Aufgabe erforderlich ist, die im öffentlichen
        Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, welche uns
        übertragen wurde. Zudem haben Sie bei der Ausübung Ihres Rechts auf
        Datenübertragbarkeit gem. Art. 20 Abs. 1 DSGVO das Recht, zu erwirken,
        dass die personenbezogenen Daten direkt von einem Verantwortlichen an
        einen anderen Verantwortlichen übermittelt werden, soweit dies technisch
        machbar ist und sofern hiervon nicht die Rechte und Freiheiten anderer
        Personen beeinträchtigt werden.
      </p>

      <h3>Widerspruch (Art. 21 DSGVO)</h3>
      <p>
        <strong>
          Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen
          Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender
          personenbezogener Daten, die aufgrund einer Datenverarbeitung im
          öffentlichen Interesse gem. Art. 6 Abs. 1 S. 1 lit. e DSGVO oder auf
          Grundlage unseres berechtigten Interesses gem. Art. 6 Abs. 1 S. 1 lit.
          f DSGVO erfolgt, Widerspruch einzulegen.
        </strong>
        Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht
        mehr verarbeiten, es sei denn, wir können zwingende berechtigte Gründe
        für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und
        Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung,
        Ausübung oder Verteidigung von Rechtsansprüchen.
      </p>

      <h3>Widerruf einer datenschutzrechtlichen Einwilligung</h3>
      <p>
        Sie haben das Recht, Ihre Einwilligung zur Verarbeitung
        personenbezogener Daten jederzeit mit Wirkung für die Zukunft zu
        widerrufen.
      </p>

      <h3>Beschwerde bei einer Aufsichtsbehörde</h3>
      <p>
        Sie haben das Recht, sich bei einer für Datenschutz zuständigen
        Aufsichtsbehörde über unsere Verarbeitung personenbezogener Daten zu
        beschweren.
      </p>

      <h2 id="updates">Aktualität und Änderungen der Datenschutzhinweise</h2>
      <p>
        Diese Datenschutzhinweise sind aktuell gültig und hat den folgenden
        Stand: November 2022.
      </p>
      <p>
        Wenn wir unsere Website und unsere Angebote weiterentwickeln oder sich
        gesetzliche oder behördliche Vorgaben ändern, kann es notwendig sein,
        diese Datenschutzhinweise zu ändern. Die jeweils aktuellen
        Datenschutzhinweise können Sie jederzeit hier abrufen.
      </p>
    </LayoutArticle>
  )
}

export default DatenschutzPage
