// Components
import Head from "next/head";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Paper from "../components/Paper";
import Title from "../components/Title";
import PaperBody from "../components/PaperBody";
import LinksList from "../components/LinksList";

// Types
import { ILink } from "../types/link";

// Get JSON
import links from "../data/links.json";
import config from "../data/config.json";
import Logo from "../components/Logo";

// Google Tag manager
import TagManager, { TagManagerArgs } from "react-gtm-module";
import { useEffect } from "react";
const tagManagerArgs: TagManagerArgs = {
  gtmId: "GTM-WZGV6DS",
};

export default function Home() {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  });

  return (
    <div>
      <Head>
        <title>{config.head.title}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container>
        <Paper>
          <Logo />
          <Title>{config.main.title}</Title>
          <div className='divide-y divide-gray-300/50'>
            <PaperBody>
              <LinksList links={links as ILink[]} />
            </PaperBody>
            <Footer>
              <p className='text-slate-400'>Copialo GRATIS!</p>
            </Footer>
          </div>
        </Paper>
      </Container>
    </div>
  );
}
