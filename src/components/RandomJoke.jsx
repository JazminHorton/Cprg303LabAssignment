import React from 'react';
import {Text, Button} from 'react-native';
//Click inside the emulator and press Ctrl + M to open the developer menu. Click on "Debug JS Remotely" to open the Chrome Developer Tools. Click on the "Console" tab to see the console output from the app.

const RandomJoke = ({}) => {
  const [fact, setFact] = React.useState('Loading ...');

  const fetchFact = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/jokes?limit=');
      const json = await response.json();
      setFact(json.value);
    } catch (e) {
      console.log(e);
    }
  };

  const handleRefreshPress = () => {
    fetchFact();
  };

  React.useEffect(() => {
    fetchFact();
  }, []);

  return (
    <>
      <Text
        style={{
          fontSize: 22,
          textAlign: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}>
        {fact}
      </Text>
      <Button title="Refresh" onPress={handleRefreshPress} />
    </>
  );
};

export default RandomJoke;