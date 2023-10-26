import React from "react";
import { Container } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Faq() {
  return (
    <>
      <Container sx={{ my: 15 }}>
        <h1 className="text-4xl font-[-Poppins] flex justify center">
          Here are some of the Frequently Asked Questions (FAQs)
        </h1>
        <br />
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">
                What is Caring Hearts Charity?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                "Caring Hearts is a charitable organization committed to
                improving the lives of vulnerable individuals and communities.
                With a mission to create a world where compassion knows no
                bounds, we work tirelessly to provide essential support,
                healthcare, education, and humanitarian aid to those in need.
                Our dedicated team and generous supporters come together to make
                a profound difference, nurturing empathy and kindness in
                society. Join Caring Hearts in our mission to bring warmth and
                hope to the lives of those less fortunate, and help us build a
                brighter, more caring world for all."
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h5">What Does Caring Hearts do?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Caring Hearts seeks to ensure the sustained well-being of all
                children living in poverty. Well-being for children is measured
                in terms of access to basic health care and appropriate
                education, children feeling protected and cared for and having
                opportunities to participate. While we measure the impact of our
                work in terms of the child, the investments are also into
                families and communities. Caring Hearts's investment into
                families and communities is to ensure that the well-being of
                children is sustained even after Caring Hearts leaves the area.
                Our experience over the years has shown that if we limit our
                programmes and investment to just directly impact the child, the
                change will not be sustainable. For sustaining the well-being of
                children, we need to equip the families and communities
                socio-economically; hence, Caring Hearts's approach to child
                well-being is community-based and involves multiple programmes.
                Caring Hearts's investment in children, their families and
                communities are often in areas such as economic development,
                education, health and leadership development. We work closely
                with community-based organisations, government, other NGOs and
                civil societies. Caring Hearts recognises that sustaining the
                well-being of children also requires policy, structure and
                systems support. We work closely with the local, state and
                central government along with other NGOs and academic
                institutions. Caring Hearts also responds to natural disasters
                due to natural calamities in the country, especially to ensure
                children in these communities are protected and their families
                are provided adequate disaster risk reduction support to be
                rehabilitated in the short-term. Caring Hearts has responded to
                every major disaster, starting from the cyclone in
                Machilipatnam, Andhra Pradesh, in 1977, tsunami in 2004,
                Uttarakhand floods in 2013 to the most recent Ockhi cyclone in
                Kerala and Tamil Nadu
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">
                Where does Caring Hearts work?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Caring Heart's work in India began in the year 1958 in a small
                way in Mumbai. Today, as the country's largest grassroots
                child-focused organisation, almost 1600 staff work in over 6252
                communities, touching the lives of a little over 26 lakh
                children, their families and communities, across 185 districts
                in 25 states and 1 National Capital Region Caring Hearts is a
                registered society under the Tamil Nadu Societies Act 1975, with
                its National Office in Chennai. We select areas where children
                live in most vulnerable situations, in consultation with
                government and other NGOs. In each of the districts, we select
                the most vulnerable blocks and work in a contiguous set of
                villages and hamlets/slums serving an average of 40,000 people.
                This model of development that covers a large area over a
                long-term basis multi-sectorally is referred to as Area
                Development Programme. In each of these areas, we begin our work
                with rigorous assessment phase and broad consultation with
                various stakeholders. Along with the local community leaders, we
                develop the long-term strategy and short-term designs for our
                work in the community. To facilitate the sustained well-being of
                children it could take anywhere from 12 to 15 years.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">What is Child Sponsorship?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Child Sponsorship is the commitment you, as a sponsor, make to
                partner with the child, the child's family, the child's
                community and Caring Hearts to ensure that the vulnerable child
                experiences sustained well-being, even after Caring Hearts
                completes its work in the area. It is a relationship not just
                between you and your sponsored child but also with your
                sponsored child's family and community. This relationship is
                aimed at giving a better life to the child by equipping the
                whole family and the community as well. Child Sponsorship is a
                way you can help make India a better and safer nation for our
                children.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">
                Is Child Sponsorship an effective way to help?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes. Child Sponsorship is the best expression of one's power to
                help build a nation fit for children. When you sponsor one
                child, you also invest in building a family and community. To
                create environments where children thrive, development
                programmes are planned and implemented in partnership with the
                communities that we serve. The most vulnerable children are
                chosen to be a part of the Child Sponsorship programme by their
                community. Your sponsorship then contributes to ensuring that
                children are better educated, healthier and protected. Your
                contribution also helps invest in healthcare, agriculture,
                income generation, access to drinking water and other
                development programmes, depending on what the community needs
                most. In our experience around the world, investing in children,
                their families and their communities has proved to be the best
                way to impact sustained progress in the life of a child. As a
                child sponsor, you can see for yourself the lasting change that
                you are helping create in the child's life and the impact your
                support has in her/his community.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">
                How does my sponsored child benefit?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Caring Hearts aims to promote lasting well-being of all children
                in the communities we serve. Our aim is to benefit and encourage
                every person in the child's community to become a strong and
                productive member, thus moving the whole community towards
                self-reliance. Your support will provide a child with
                opportunities to access basic health care, quality education,
                good health, sanitation, access to clean drinking water, income
                generation programmes for their parents and much more. This
                gives a chance for children to experience a normal, healthy and
                happy childhood.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">
                What should I do if my sponsored child contacts me through
                social media sites such as Facebook, Twitter etc.?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                As a child-focused organisation, Caring Hearts recognises that
                social media has brought new types and levels of risks to
                children. While Caring Hearts cannot control the use of
                technology and social media, at Caring Hearts, we strive to
                ensure that children and their families are protected from any
                potential physical or emotional abuse resulting from
                inappropriate and unsafe internet and social media use,
                including the sharing of private information about a child and
                their family. We encourage you to develop a meaningful
                relationship with your sponsored child in a way that is safe,
                secure and fulfilling for both of you. We also want to ensure
                that the content sent to the child is appropriate and culturally
                sensitive. Because of this, we ask you, our sponsors, to not
                engage in direct, unmonitored communication with your sponsored
                child or family. This includes direct contact through the
                internet or social media (e.g. Facebook, Skype, etc.). Please
                note that Caring Hearts does not allow unplanned visits to your
                sponsored child's residence or community, under any
                circumstance. Caring Hearts would be more than happy to organise
                a visit for our sponsors to meet their sponsored children
                because all such visits must be organised through us. In order
                to ensure your child's security, we request you to not post your
                sponsored child's last name or specific location and contact
                details on the internet or social media sites. For example, it
                would be nice if you could share the fact you have joined your
                sponsored child in his/her life journey through Caring Hearts's
                child sponsorship programme. But, please refrain from posting
                personal information or contact details of your sponsored child
                on your social networks. Also remember not to geotag the
                location when you visit your sponsored child. And because we
                value your privacy and security as a sponsor, sponsored children
                and families are discouraged from contacting you without Caring
                Hearts's knowledge as well. An important reason why we do not
                allow direct correspondence despite its seeming benefits is that
                a family member or someone who knows the child could go online,
                create an account and pretend to be the child and make demands
                for money, etc. In light of these concerns, we request you to
                report any un-facilitated contact initiated by your sponsored
                child or their family to World Vision India for both their
                security and yours at indiasponsors@caringhearts.org.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">
                How can I be sure that the money I send is managed correctly?
                Who audits Caring Heart's accounts?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Caring Hearts is committed to the highest levels of stewardship
                of all its resources. Through systematic monitoring and
                evaluation of all its programmes, Caring Hearts constantly
                strives to improve the quality of its programmes. Caring Hearts
                has systematic financial audits (internal and external) of all
                its programmes. BSRR & Co. are our current external auditors. In
                addition to these annual reviews and audits, Caring Hearts
                maintains a high level of accountability to its key stakeholders
                starting from the communities that we work in, the government
                and our sponsors and donors. The Home Ministry and Income Tax
                Office regularly receive our reports and Audited Financial
                Statements along with all other required documents in compliance
                with the regulations of the Government of India. Total
                transparency in transactions with the government and our
                supporters is the norm in Caring Hearts. Furthermore, sponsors
                and donors may visit the child or children that they sponsor to
                see the impact their support is making in the lives of these
                children. Many sponsors have visited Caring Heart's projects to
                see for themselves that the money they donate gets there and is
                used wisely. Our sponsors receive a community newsletter each
                year, which reports on how sponsors' money is helping change
                people's lives.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">
                What if I cannot continue my sponsorship payments? What will
                happen to the child?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We understand that financial and personal situations change. If
                you need to cancel, just let us know and we will find another
                sponsor for your child. Your child will not be neglected. World
                Vision India will ensure that the funding commitment to the
                project continues. The benefits as planned for the children in
                the community will be carried out.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">
                Can I send money to the child directly or to the local Caring
                Hearts office where I live?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We request you to avoid sending your sponsorship contribution to
                your child directly. Kindly refer to the FAQ, 'What should I do
                if my sponsored child contacts me through social media sites
                such as Facebook, Twitter, etc.?', under child sponsorship for
                more details. Receipts for all contributions are issued only by
                the department of Donor Engagement at the National Office in
                Mumbai. To avoid unnecessary delays, please send your
                contributions directly to the Donor Engagement department at the
                Mumbai office for quick receipting.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </>
  );
}

export default Faq;
