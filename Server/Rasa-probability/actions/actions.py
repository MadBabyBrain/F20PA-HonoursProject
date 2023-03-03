# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher

import json
import random

#
#
# class ActionHelloWorld(Action):
#
#     def name(self) -> Text:
#         return "action_hello_world"
#
#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#
#         dispatcher.utter_message(text="Hello World!")
#
#         return []


class ActionAskQuestion(Action):
    def name(self) -> Text:
        return "action_ask_question"

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, any]) -> List[Dict[Text, Any]]:
        entities = tracker.latest_message['entities']
        print(entities)
        message = ""

        file = open('../_middle_files/_json/words.json').read()
        jFile = json.loads(file)

        for e in entities:
            if e['entity'] == 'question':
                name = e['value']

            # message = jFile[name]['sentences'][0]['text']

            weights = [x['probability'] for x in jFile[name]['sentences']]
            answers = [x['text'] for x in jFile[name]['sentences']]

            message = random.choices(answers, weights=weights, k=1)[0]

            dispatcher.utter_message(text=name + ":=:" + message)

            print(message)

        return []
