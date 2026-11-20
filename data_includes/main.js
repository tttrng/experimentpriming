//var counterOverride = 11;
//PennController.DebugOff()
PennController.ResetPrefix(null);

PennController.SetCounter( "setcounter" );
PennController.Sequence("setcounter","demoquestionnaire", "Instruction", randomize("norming"), SendResults(), "bye" );

PennController("consent",
    newHtml("consent", "consent.html").print(),
    newButton("agree", "I agree").print().wait()
)

PennController("demoquestionnaire",
    newText("<p>Please answer the following question, and press the Submit button below.</p>").print(),
    newText("<br /> Which English do you speak (e.g., British, American, etc.)?").print(),
    newTextInput("English").print().log(),
    newVar("English").settings.global().set( getTextInput("English") ),
    newText("warning", "Please enter your response. If you do not want to answer, enter NA").settings.color("red").settings.bold(),
    newText("<br /> Your prolific ID:").print().log(),
    newTextInput("pID").print().log(),
    newVar("pID").settings.global().set( getTextInput("pID") ),
    newText("warning", "Please enter your response.").settings.color("red").settings.bold(),
    newText("<br />").print(),
    newButton("Submit").settings.size(168, 24).print().wait(getTextInput("English").testNot.text("").failure(getText("warning").print()))
).log( "English" , getVar("English") )

PennController("Instruction",
    newText("<p> Thanks for agreeing to participate in our experiment! Here we explain the task you will be engaging in this experiment.").center().print(),
    newText("<p> In this experiment, you will be presented with 72 sentences. Your task is to rate each sentence, using 1-7 scale, in terms of <b> how acceptable the sentences sound to you </b> as a native speaker of English. There is no need to consider the plausibility of the meaning of sentences. Just rate each sentence in terms of their well-formedness or ill-formedness. </p>").center().print(),
    newText("<p> Note that there is no 'right answer.' (but there will be some attention checks). So don't overthink or spend too much time on each sentence pair (please read the entire sentences at least once though!). Please rate each sentence using your intuition as a native speaker of English. </p>").center().print(),
    newButton("Start").settings.size(168, 24).print().wait()
)


PennController.Template("target_accept.csv",
    variable => PennController("norming",
    newTimer(250).start().wait(),
    newText("S", variable.Sentence).print(),
    newText("space", " ").print(),
    newScale("Acceptability", "1", "2", "3", "4", "5", "6", "7") // 7-point scale
        .settings.before(newText("bad", "extremely unacceptable"))    // Add a text element to the left
        .settings.after(newText("good", "perfectly acceptable"))    // Add a text element to the right
        .settings.labelsPosition("top")
        .print()
        .wait()
        .settings.log()
    )
    .log( "Sentence", variable.Sentence)
    .log( "PrimeType", variable.PrimeType)
    .log( "StimType", variable.StimType)
    .log( "Item_num", variable.Item)
    .log( "Group", variable.Group)
)

PennController.Template("filler_accept.csv",
    variable => PennController("norming",
    newTimer(250).start().wait(),
    newText("S", variable.Sentence).print(),
    newText("space", " ").print(),
    newScale("Acceptability", "1", "2", "3", "4", "5", "6", "7") // 7-point scale
        .settings.before(newText("bad", "extremely unacceptable"))    // Add a text element to the left
        .settings.after(newText("good", "perfectly acceptable"))    // Add a text element to the right
        .settings.labelsPosition("top")
        .print()
        .wait()
        .settings.log()
    )
    .log( "Sentence", variable.Sentence)
    .log( "StimType", variable.StimType)
    .log( "Item_num", variable.Item)
)

PennController.Template("prime_accept_stimulus.csv",
    variable => PennController("norming",
    newTimer(250).start().wait(),
    newText("S", variable.Sentence).print(),
    newText("space", " ").print(),
    newScale("Acceptability", "1", "2", "3", "4", "5", "6", "7") // 7-point scale
        .settings.before(newText("bad", "extremely unacceptable"))    // Add a text element to the left
        .settings.after(newText("good", "perfectly acceptable"))    // Add a text element to the right
        .settings.labelsPosition("top")
        .print()
        .wait()
        .settings.log()
    )
    .log( "Sentence", variable.Sentence)
    .log( "StimType", variable.StimType)
    .log( "Item_num", variable.Item)
    .log( "Group", variable.Group)
)


newTrial("bye" ,
    newText("Thank you for your participation! Please go to the follwing to varify your participation: <a href='https://app.prolific.com/submissions/complete?cc=C79WNHRW'> https://app.prolific.com/submissions/complete?cc=C79WNHRW </a> ").print(),
    newButton().wait()  // Wait for a click on a non-displayed button = wait here forever
)

.setOption("countsForProgressBar" , false)
