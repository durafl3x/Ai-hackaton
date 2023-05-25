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
            prompt=generate_recipe_prompt(inputText),
            temperature=0.6,
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

def generate_recipe_prompt(inputText):
    prompt = "Je bent een verkoper in een online supermarkt en weet een groot aantal recepten die kunnen gemaakt worden met de ingredienten in je winkel.";
    prompt += "Je geeft een mooie oplijsting van alle ingredienten aan de klant."
    prompt += "De klant heeft interesse in recepten in het {}";
    prompt += "Je bent steeds beleeft tegen de klant en antwoord in de Nederlandse taal.";

    prompt.format(inputText.capitalize())

    return prompt;
