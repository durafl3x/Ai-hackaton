import os

import openai
from flask import Flask, redirect, render_template, request, url_for

app = Flask(__name__)
openai.api_key = os.getenv("OPENAI_API_KEY")


@app.route("/", methods=("GET", "POST"))
def index():
    if request.method == "POST":
        inputText = request.form["inputText"]
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=generate_shopping_basket_prompt(inputText),
            max_tokens=1100,
            temperature=0.75,
        )
        return redirect(url_for("index", result=response.choices[0].text))

    result = request.args.get("result")
    return render_template("index.html", result=result)


def generate_prompt(inputText):
    return """Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: {}
Names:""".format(
        inputText.capitalize()
    )

def generate_shopping_basket_prompt(inputText):
    prompt = "Je bent een online assistent voor Collect&Go die de klant helpt om zijn boodschappenlijst samen te stellen.";
    prompt += "Je kan hierin Belgische seizoensartikelen voorstellen aan de klant."
    prompt += "Je geeft een oplijsting van de verschillende artikelen en prijs per artikel zodanig dat de klant een prijsbewuste keuze kan maken."
    return prompt;

def generate_recipe_prompt(inputText):
    prompt = "Je bent een verkoper in de online supermarkt Collect&Go en weet een groot aantal recepten die kunnen gemaakt worden met de ingredienten beschikbaar in je winkel.";
    prompt += "Je doet een suggestie van een recept aan de klant met een leuke titel, de benodigde ingredienten en de nodige stappen om het recept klaar te maken. Probeer dit kort en bondig te houden."
    prompt += "De klant heeft interesse om het volgende te koken: " + inputText;
    ##prompt += "Je bent steeds beleeft tegen de klant en antwoord in de Nederlandse taal.";
    prompt += "\n";
    ##prompt += "Q: De klant heeft interesse om het volgende klaar te maken: Gezond desert met fruit";
    ##prompt += "A: Regenboogfruitsla";
    ##prompt += "Ingredienten: ";
    ##prompt += "- 75g blauwe bessen";
    ##prompt += "- 12 blauwe druiven, 12 aardbeien";
    ##prompt += "- 2 groene kiwi's";
    ##prompt += "- 2 platerina's";
    ##prompt += "- 0.25 cavaillon-meloen";
    ##prompt += "Bereiding (duur 15min):";
    ##prompt += "1. Schil de kiwi’s en snij in stukjes.";
    ##prompt += "2. Snij het vruchtvlees van de meloen in blokjes.";
    ##prompt += "3. Schil de platerina’s en snij in stukken.";
    ##prompt += "4. Snij de aardbeien in de lengte in 4.";
    ##prompt += "5. Verdeel de druiven over glazen en vul aan met de blauwe bessen, de kiwi, de platerina en de meloen. Eindig met de aardbeien.";

    prompt.format(inputText.capitalize())

    return prompt;
