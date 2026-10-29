PennController.ResetPrefix(null) // Shorten command names (keep this line here)
PennController.DebugOff()
//var counterOverride = 7;

PennController.SetCounter("setcounter");
Sequence("setcounter","consent","intro","intro0","recording","microphonecheck","instruction", "trial_prac", "warn", "ready", "trial", "feedback", SendResults() , "bye" )

newTrial( "intro0" ,
    newText("If you run into any technical issues, please send us a message via Prolific describing the issue you encountered. If we don’t receive a completion code and can’t locate your data, your submission may be rejected, and we really want to avoid that happening! :)").settings.css("font-size", "1.5em").settings.css("margin","0px").print(),
    newScale("check0", "<p>I understand</p>").checkbox().print().wait(),
    newButton("Next","Next").settings.css("font-size", "1.5em").settings.css("margin", "50px").settings.size(500, 48).print().wait()
)

newTrial( "intro" ,
    newText("Welcome","<p>Welcome! To participate in this experiment, you must meet the following requirements.</p> (1) Your computer must have a microphone (built-in microphone is fine). </p> <p> (2) Your brower must be either Chrome or Firefox. You CANNOT use Safari for this experiment. </p> <p> (3) You must turn off music/video (e.g., youtube) played in the same computer you are using to take this experiment. </p> <p> (4) Please note that you will be asked to speak out loud during the experiment (read out loud words and recite memorized sentences). Your speech will be recorded and that's our critical data. </p> <p>If you meet these requirements, please enter your native language and prolific ID below and click Next:</p>").settings.css("font-size", "1.5em").settings.css("margin","0px").print(),
    newTextInput("Language", "Your native language:").settings.css("font-size", "1.5em").print().log(),
    newTextInput("ProlificID", "Your prolific ID:").settings.css("font-size", "1.5em").print().log(),
    newButton("Next","Next").settings.css("font-size", "1.5em").settings.css("margin", "50px").settings.size(500, 48).print().wait()
)

newTrial( "consent" ,
    newHtml("intro", "consent_mit (1).html").print(),
    newButton("Agree", "I Agree").settings.css("margin","15px").settings.css("font-size", "1.5em").settings.size(200, 36).center().print().wait(),
)

newTrial( "warn" ,
    newText("<p> Practice done! </p> <p> <b> Please note: some participants reported that the script froze in the middle of the experiment. If this happens to you, please don't panic, and let us know via the message function in Prolific. We will make sure that you will be compensated for the time you spent for the experiment. </b> </p>").settings.css("font-size", "1.5em").settings.css("margin","0px").print(),
    newButton("Next","Next").settings.css("font-size", "1.5em").settings.css("margin", "0px").settings.size(500, 48).print().wait()
)

InitiateRecorder("https://umassgaplab.net/experiment/PCIbex_server.php", "This experiment collects audio recordings. <strong>Once you grant it access to your recording device, you will be notified of whether you are being recorded by a label at the top of the page</strong>").label("recording")

newTrial( "microphonecheck" ,
    newText("mic","<p>First, we need to make sure that your microphone is working properly. Press the 'Record' button below and say something. You should see a red squire saying 'Recording...' on the top of your screen. Once you press 'Stop' button, you should hear the playback of your recording. You can also re-play your recording by pressing the play button. Make sure that you turn on your audio to be able to hear your recording. After this procedure you should see a 'Next' botton at the bottom of this page (scroll down if you don't see the 'Next' botton.). </p> <p> <b> Important: Please ensure that your test recording is audible to you before you proceed further. </b> </p>").settings.css("font-size", "1.5em").settings.css("margin","0px").print(),
    newMediaRecorder("recorder", "audio").once().print().center().settings.css("margin","50px").wait().play().wait("playback"),
    newButton("Next","Yes, my microphone is working.").settings.css("font-size", "2em").settings.css("margin", "80px").settings.size(500, 48).print().wait()
)

//newTrial("instruction",
//    newText("Instr", " <p>Please read this instruction carefully. If you do not undertand the task and proceed anyway, you will not be invited to any of our future studies. </p><p>In each trial in this experiment, you will see two sentences one at a time. Your task is to <b> read out loud and memorize the two sentences for later recall. </b> You are given 7 seconds to read out loud and memorize each sentence (please press the space key if you don't need 7 seconds). </p> <p> After you read and memorize two sentences, you will be prompted to recall one of them. The prompt will be words and phrases that appeared in one of the two sentences. For example, if you memorize 'The girl said that the boy went to the store' and 'The breeder believes that the dog chased the cat', you may see 'the girl said that, 'store', 'boy', 'went', (the order is random), as the prompt to recall the sentence 'The girl said that the boy went to the store.'  Please recite the sentence that included all the prompt words or phrases <b> out loud </b> and <b> intelligibly </b>. </p> <p> <b> TIP: Many people find it helpful to try to visualize the situations described by sentences when you memorize them. </b> </p> <p> <b> Also, we understand this is not an easy task, so no need to freak out if you are not perfect, but PLEASE attempt to formulate a full sentence and articulate it :) </b> </p>").settings.css("font-size", "1.5em").settings.css("margin", "0px").print(),
//    newButton("Click","Click here to begin practice trials!").settings.css("font-size", "1.5em").settings.css("margin", "0px").settings.size(500, 48).print().wait()
//)

newTrial("instruction",
    newText("Instr", "<p>Please read these instructions carefully :)</p> <p>In each trial, you will see two sentences, presented one at a time. Your task is to <b>read each sentence aloud and memorize it for later recall</b>. It is critical that you read each sentence aloud <b>EXACTLY as it is presented</b>. Do not skip, add, or change any words.</p> <p>You will have 7 seconds to read aloud and memorize each sentence. If you finish before the 7 seconds are up, you may press the space bar to continue.</p> <p>After you have read and memorized both sentences, you will be asked to recall one of them. The prompt will consist of words and phrases that appeared in the sentence you need to recall. The words and phrases will be presented in a random order.</p> <p>For example, suppose you memorize the following sentences:</p> <p>“The girl said that the boy went to the store.”<br> “The breeder’s belief about the dog surprised everyone.”</p> <p>You might then see the prompts “the girl said that,” “store,” “boy,” and “went.” In that case, you should recall and recite the sentence “The girl said that the boy went to the store.”</p> <p>Please recite the complete sentence <b>aloud</b> and <b>clearly</b>. Please do not speak too quickly, because fast speech can be difficult to understand.</p> <p><b>Some sentences may not sound entirely natural or acceptable to you. Even so, please try to memorize and recall each sentence accurately, exactly as it was presented, without changing it to make it sound more natural.</b></p> <p>There is no need to be afraid of making mistakes! We will not reject participants simply because their responses are inaccurate, as long as they make a good-faith effort to complete the task :)</p> <p><b>We understand that this is not an easy task, so do not worry if your responses are not perfect. However, please try your best to produce a complete sentence and articulate it clearly :)</b></p>").settings.css("font-size", "1.5em").settings.css("margin", "0px").print(),
    newButton("Click","Click here to begin practice trials!").settings.css("font-size", "1.5em").settings.css("margin", "0px").settings.size(500, 48).print().wait()
)


PennController.Template("practice.csv", variable => ["trial_prac",
    "PennController", PennController(
        newText("ready", "Press space when ready.").settings.css("font-size", "2em").center().print(),
        newKey("next", " ").wait(),
        getText("ready").remove(),
        newMediaRecorder(variable.Item_ID, "audio").record(),
        newText("memorize1", "Read out loud & Memorize (Please DO NOT skip words! time limit: 7 secs)").center().print(),
        newText("target", variable.Target).settings.css("font-size", "1.5em").center().print(),
        newText("done", "Press space when complete.").settings.css("font-size", "1em").center().print(),
        newTimer("time limit", 6500),
        newTimer(500).start().wait(),
        newKey("space", " ").callback( getTimer("time limit").stop()),
        getTimer("time limit").start().wait(),
        getKey("space").disable(),
        getText("memorize1").remove(),
        getText("target").remove(),
        getText("done").remove(),   
        newText("memorize2", "Read out loud & Memorize (Please DO NOT skip words! time limit: 7 secs)").center().print(),
        newText("prime", variable.Prime).settings.css("font-size", "1.5em").center().print(),
        newText("done1", "Press space when complete.").settings.css("font-size", "1em").center().print(),
        newTimer("time limit2", 6500),
        newTimer(500).start().wait(),
        newKey("space2", " ").callback( getTimer("time limit2").stop()),
        getTimer("time limit2").start().wait(),
        getKey("space2").disable(),
        getText("memorize2").remove(),
        getText("prime").remove(),
        getText("done1").remove(),
        newText("RPrompt", "Recall the whole sentence that included all of the following words/phrases (in red font, time limit: 15 secs):").settings.css("font-size", "1em").center().print(),
        newCanvas("shape", 400, 400).center()
            .add( 0, 100, newText("c0",variable.Cue0).color("red").settings.css("font-size", "1.5em"))
            .add( 320, 100, newText("c1",variable.Cue1).color("red").settings.css("font-size", "1.5em"))
            .add( 0, 300, newText("c2",variable.Cue2).color("red").settings.css("font-size", "1.5em"))
            .add( 320, 300, newText("c3",variable.Cue3).color("red").settings.css("font-size", "1.5em"))
            .print(),
        newText("whitespace", " ").settings.css("font-size", "1em").center().print(),
        newText("RPrompt2", "Even if you can't remember the sentence, try to say a grammatical sentence using all the words above.").settings.css("font-size", "1em").center().print(),
        newText("done2", "Press space when complete.").settings.css("font-size", "1em").center().print(),
        newTimer("time limit3", 14500),
        newTimer(500).start().wait(),
        newKey("space3", " ").callback(getTimer("time limit3").stop()),
        getTimer("time limit3").start().wait(),
        getKey("space3").disable(),
        newTimer(500).start().wait(),
        getMediaRecorder(variable.Item_ID).stop()
        )
    ]
)

newTrial( "ready" ,
    newText("Ready?","<p>Ready to begin the experiment? Please check the following boxes to ensure that you understood the task.</p>").center().print(),
    newScale("check1", "<p>First, you should read OUT LOUD and memorize two sentences EXACTLY AS THEY ARE PRESENTED (time limit, 7 seconds). Reading out loud sentences is as important as recalling the sentences. We do not expect you to recall the sentences perfectly well, but we do expect you to read out loud sentences exactly when memorizing. </p>").checkbox().print().wait(),
    newScale("check2", "<p> Next, you should recall one of the sentence that contain the prompt words/phrases (NOT both sentences!). Please make sure to say the sentence clearly and intelligibly. </p>").checkbox().print().wait(),
    newScale("check3", "<p> When recalling, please make sure to include all words and phrases given as a prompt. </p>").checkbox().print().wait(),
    newScale("check4", "<p> Please try not to say the target sentence/phrase mulitiple times. Some people say the target sentence many times and that just produces unusable data. </p>").checkbox().print().wait(),
    newScale("check5", "<p> Please make sure to press the space key AFTER you FINISHED saying the entire sentence, and DO NOT speak too fast (unintelligle utterances will result in unusable data). </p>").checkbox().print().wait(),
    newScale("check6", "<p class = 'instruction'> Finally, this experiment takes around 20 uninterrupted minutes <b> assuming that you complete each trial in a reasonble pace (if you don't spend the maximum time on every trial). </b> We ask you to not take a long break in the middle of the experiment. We are aware that the task can be difficult, but we are not evaluating your memory performance so please do not be stressed out. Please be ready to spend next 25 unintterupted minutes before you begin the experiment :) </p>").checkbox().print().wait(),
    newButton("begin","I'm ready - let's begin!").settings.size(400, 24).center().print().wait() 
)

PennController.Template("stimuli.csv", variable => ["trial",
        "PennController", PennController(
        newText("ready", "Press space when ready (time limit: 10 seconds).").settings.css("font-size", "2em").center().print(),
        
        newTimer("time limit0", 10000),
        newKey("space0", " ").callback( getTimer("time limit0").stop()),
        getTimer("time limit0").start().wait(),
        getKey("space0").disable(),
        getText("ready").remove(),
        newVar("RT").global().set( v => Date.now()),
        newMediaRecorder(variable.Group + variable.Item_ID, "audio").record(),
        newText("memorize1", "Read out loud & Memorize (Please DO NOT skip words! time limit: 7 secs)").center().print(),
        newText("target", variable.Target).settings.css("font-size", "1.5em").center().print(),
        newText("done", "Press space when complete.").settings.css("font-size", "1em").center().print(),
        newTimer("time limit", 6500),
        newTimer(500).start().wait(),
        newKey("space", " ").callback( getTimer("time limit").stop()),
        getTimer("time limit").start().wait(),
        getKey("space").disable(),
        getText("memorize1").remove(),
        getText("target").remove(),
        getText("done").remove(),   
        newText("memorize2", "Read out loud & Memorize (Please DO NOT skip words! time limit: 7 secs)").center().print(),
        newText("prime", variable.Prime).settings.css("font-size", "1.5em").center().print(),
        newText("done1", "Press space when complete.").settings.css("font-size", "1em").center().print(),
        newTimer("time limit2", 6500),
        newTimer(500).start().wait(),
        newKey("space2", " ").callback( getTimer("time limit2").stop()),
        getTimer("time limit2").start().wait(),
        getKey("space2").disable(),
        getText("memorize2").remove(),
        getText("prime").remove(),
        getText("done1").remove(),
        getVar("RT").set( v => Date.now() - v ),
        newText("RPrompt", "Recall the whole sentence that included all of the following words/phrases (in red font, time limit: 15 secs):").settings.css("font-size", "1em").center().print(),
        newCanvas("shape", 400, 400).center()
            .add( 0, 100, newText("c0",variable.Cue0).color("red").settings.css("font-size", "1.5em"))
            .add( 320, 100, newText("c1",variable.Cue1).color("red").settings.css("font-size", "1.5em"))
            .add( 0, 300, newText("c2",variable.Cue2).color("red").settings.css("font-size", "1.5em"))
            .add( 320, 300, newText("c3",variable.Cue3).color("red").settings.css("font-size", "1.5em"))
            .print(),
        newText("whitespace", " ").settings.css("font-size", "1em").center().print(),
        newText("RPrompt2", "Even if you can't remember the sentence, try to say a grammatical sentence using all the words above.").settings.css("font-size", "1em").center().print(),
        newText("done2", "Press space when complete.").settings.css("font-size", "1em").center().print(),
        newTimer("time limit3", 14500),
        newTimer(500).start().wait(),
        newKey("space3", " ").callback(getTimer("time limit3").stop()),
        getTimer("time limit3").start().wait(),
        getKey("space3").disable(),
        newTimer(500).start().wait(),
        getMediaRecorder(variable.Group + variable.Item_ID).stop()
        ).log("Target" , variable.Target)
        .log("Prime", variable.Prime)
        .log("PrimeType", variable.PrimeType)
        .log("TargetType", variable.TargetType)
        .log("ItemNumber", variable.Item_ID)
        .log( "ReactionTime" , getVar("RT"))
        .log("Group", variable.Group)
    ]
)

newTrial("bye" ,
    newText("Thank you for your participation! Please click the follwing to verify your participation: <a href='https://app.prolific.com/submissions/complete?cc=C1PBGQ8Z'> https://app.prolific.com/submissions/complete?cc=C1PBGQ8Z</a> ").print(),
    newButton().wait()  // Wait for a click on a non-displayed button = wait here forever
).setOption("countsForProgressBar" , false)

