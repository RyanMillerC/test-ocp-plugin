import * as React from 'react';
import Helmet from 'react-helmet';
import {
  Page,
  PageSection,
  Text,
  TextContent,
  Title,
} from '@patternfly/react-core';
import './example.css';

export default function ExamplePage() {
  const [loading, setLoading] = React.useState(false);
  const [catFact, setCatFact] = React.useState([]);

  React.useEffect(() => {
    const loadCatFact = async () => {
      setLoading(true);
      const response = await fetch('https://catfact.ninja/fact'); // TODO: FIX
      const json = await response.json();
      setCatFact(json.fact);
      setLoading(false);
    };

    loadCatFact();
  }, []);

  return (
    <>
      <Helmet>
        <title data-test="example-page-title">Hello, Plugin!</title>
      </Helmet>
      <Page>
        <PageSection variant="light">
          <Title headingLevel="h1">Hello, Plugin!</Title>
        </PageSection>
        <PageSection variant="light">
          <TextContent>
            <Text component="p">
              <span className="console-plugin-template__nice">Nice!</span> Here
              is a cat fact:
            </Text>
            <Text component="p">
              {loading ? '(Cat fact is loading...)' : catFact}
            </Text>
          </TextContent>
        </PageSection>
      </Page>
    </>
  );
}
