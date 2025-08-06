function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6cXj4V2xyMB":
        Script1();
        break;
  }
}

function Script1()
{
  // Get the Storyline player object to access variables
var player = GetPlayer();

// Retrieve the cat's weight from the 'catWeight' variable
var catWeight = player.GetVar("catWeight");

// Calculate the correct insulin dose (0.25 IU/kg)
var correctDose = catWeight * 0.25;

// Update the 'correctDose' variable in Storyline
player.SetVar("correctDose", correctDose);
}

