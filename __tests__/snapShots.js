import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/Screens/Home';
import Login from '../src/Screens/Login';

test('Home', () => {
  const HomeSnap = renderer.create(<Home />).toJSON();

  expect(HomeSnap).toMatchSnapshot();
});

test('login', () => {
  const loginSnap = renderer.create(<Login />).toJSON();

  expect(loginSnap).toMatchInlineSnapshot(`
    <View>
      <Text>
        Name:
      </Text>
      <TextInput
        onChangeText={[Function]}
        value="name"
      />
      <Text>
        Email:
      </Text>
      <TextInput
        onChangeText={[Function]}
        value="email"
      />
      <View
        accessibilityRole="button"
        accessible={true}
        collapsable={false}
        focusable={true}
        onClick={[Function]}
        onResponderGrant={[Function]}
        onResponderMove={[Function]}
        onResponderRelease={[Function]}
        onResponderTerminate={[Function]}
        onResponderTerminationRequest={[Function]}
        onStartShouldSetResponder={[Function]}
        style={
          Object {
            "opacity": 1,
          }
        }
      >
        <View
          style={
            Array [
              Object {},
            ]
          }
        >
          <Text
            style={
              Array [
                Object {
                  "color": "#007AFF",
                  "fontSize": 18,
                  "margin": 8,
                  "textAlign": "center",
                },
              ]
            }
          >
            Login
          </Text>
        </View>
      </View>
    </View>
  `);
});
