function toggleInfo() {
	if (document.getElementById('info').style.display == "block") {
		document.getElementById('info').style.display = "none";
	} else {
		document.getElementById('info').style.display = "block";
	}
}

function showSidebar() {
    document.getElementById("cssmenu").style.visibility = "visible";
}

function hideSidebar() {
    document.getElementById("cssmenu").style.visibility = "hidden";
	if (document.getElementById("textwall").style.visibility == "visible") {
		hideTextwall();
	}
}

function hideTextwall() {
    document.getElementById("textwall").style.visibility = "hidden";
}

function showTextwall(divid) {
    document.getElementById("textwall").style.visibility = "visible";
    var text = "";

    // team

	if (divid=="team") {
		text += "<h1>The Team</h1>";
		text += "<br><br><br><br><br>";
		text += "<h2>Sunardi | 1000233 </h2><br>";
		text += "<h2>He Ruidan | 1000028 </h2><br>";
		text += "<h2>Enyi Tan | 1000038 </h2><br>";
	}

	// introduction

	else if (divid=="idea") {
		text += "<h1>The Idea</h1>";
		text += "Our project initially was to recreate and manipulate images in 2D space using particles.<br><br>";
		text += "<img src='Sidebar/images/Spectrogram.png'><br><br><br>";
		text += "We then expanded the idea to visualising 3D objects using particles instead of triangles.<br><br><br>";
		text += "<img src='Sidebar/images/Horse.png'><br><br><br>";
		text += "It then made sense to allow users to be able to interact with the system that we have created. For novelty, we wanted to use an intuitive yet contactless system input for user comfort.<br><br><br><br>";
		text += "<img src='Sidebar/images/Leap II.png'><br><br><br>";
		text += "The aim of this project was simply to demonstrate a good balance of technical grounding and visual appeal so that everyone can appreciate it.<br><br><br><br><br>";

	}

	// implementation

	else if (divid=="data") {

		text += "<h1>Data Processing</h1>";

		text += "<h1>Parser</h1>";

		text += "We have created a python script which helps us parse a Wavefront .obj file into a Javascript file that can be read easily by WebGL. These files enjoy extreme popularity and by so doing, our system is opened up to a lot more possibilities.<br><br>";

		text += "We had also implemented a simple mesh decimation algorithm that compares input vertices and removes points that are below a given threshold. The parameters of the system is the threshold value and the round off value. This removes indistinguishable artefacts that do not contribute to major features of the object.<br><br><br><br>";

		text += "<img src='Sidebar/images/Decimation.png'><br><br>";

		text += "<img src='Sidebar/images/Decimation II.png'><br><br><br>";

		text += "Our system also accomodates different obj files and projects them on the screen correctly. Such transformations include linear scaling and position translation.<br><br><br>";

		text += "<img src='Sidebar/images/Mapping.png'><br><br><br>";

	}

	else if (divid=="particle") {

		text += "<h1>Particle Structure</h1>";

		text += "<img width='900px' src='Sidebar/images/Structure.png'><br><br>";

		text += "<img width='900px' src='Sidebar/images/Structure II.png'><br><br><br>";

	}

	else if (divid=="model") {

		text += "<h1>Particle Movements</h1><br><br>";

		text += "<h2>Smooth Value Interpolation Technique</h2>";

		text += "We generate interpolated values between the target value and the origin so that animations are less jerky. Different interpolation values are acheived based on the function that is specified in our system.<br><br><br><br>";

		text += "<img width='900px' src='Sidebar/images/Interpolation III.png'><br><br>";

		text += "<h2>Positional Update</h2>";

		text += "<img width='900px' src='Sidebar/images/Update.png'><br><br><br>";

		text += "<font color='yellow'>renderPoint = ( customPoint_X - initPoint ) * amplitude + initPoint</font><br><br><br><br>";

		text += "<h2>Particle Turbulence</h2>";

		text += "There was no need to create a very complex noise generator for our particle system because the equations implemented below provided a visually appealing effect but was not GPU-intensive.<br><br><br>";

		text += "<font color='yellow'>pos.x += cos ( time + ( position.y / 8.0 ) ) * 50.0<br><br>";

		text += "pos.y += sin ( time + ( position.x / 8.0 ) ) * 50.0<br><br>";

		text += "pos.z += sin ( time + ( position.z / 4.0 ) ) * 40.0</font><br><br><br><br>";

		text += "<h2>Drop Effect</h2>";

		text += "We applied free-fall motion (second order ODE) for each particle to simulate gravity. However, g is not the gravitational constant probably due to graphics environment difference. Instead, it is adjusted for better visual effects.<br><br><br>";

		text += "<font color='yellow'>current_pos.y = original_pos.y - 1/2 * g * t ^ 2</font><br><br><br>";

		text += "For the reversal effect, a multiplier k is interpolated from 0 to 1. The inverse exponential function is used in this case to create a Matrix-like effect.<br><br><br>";

		text += "<font color='yellow'>current_pos.y += (original_pos.y - current_pos.y ) * k</font><br><br><br><br>";

		text += "<img width='350px' src='Sidebar/images/Exponential.png'><br><br><br><br>";

		text += "<h2>Disperse Effect</h2>";

		text += "Similar to the drop effect, similar physical models are used for dispersion of particles. The model will cause each particle to have a random initial velocity so that it moves away from the origin point with a constant drag force.<br><br><br>";

		text += "<font color='yellow'>current_pos = old_pos + initial_v * t - a * t ^ 2 * direction_vector</font><br><br><br>";

		text += "The reversal model is exactly the same in this case but for all 3 axis.<br><br><br>";

		text += "<font color='yellow'>current_pos += (original_pos - current_pos ) * k</font><br><br><br><br><br>";

		text += "<h2>Colour Transitions</h2>";

		text += "To aid in visual enhancement, we have added ever-changing colours to each particle. The end result is that users see a moving rainbow and there is an impression that the static object is morphing.<br><br>";
	}

	else if (divid=="user") {

		text += "<h1>User Interactivity</h1><br><br>";

		text += "<h2>Leap Motion</h2><br>";

		text += "<img src='Sidebar/images/Leap.png'><br><br><br><br>";

		text += "The main idea was for users to use intuitive gestures to control our system effectively. The Leap Motion API allows us to obtain values of the hand and individual fingers of the user.<br><br><br><br>";

		text += "<img src='Sidebar/images/API.png'><br><br><br>";

		text += "<img src='Sidebar/images/API II.png'><br><br><br>";

		text += "We are then able to define gestures based on the changing data over several timeframes, getting information like position, velocity, acceleration and direction. These are mapped to various function calls and visual effects.<br><br><br><br>";

		text += "<img  width='800px' src='Sidebar/images/Gestures III.png'><br><br><br>";

		text += "<img src='Sidebar/images/Gestures II.png'><br><br><br>";

		text += "<h2>Music</h2><br>";

		text += "To enhance interactivity, sound effects are also integrated into our system.<br><br><br>";

		text += "<img src='Sidebar/images/Sound.png'><br><br><br><br><br>";

	}

	// what's next

	else if (divid=="extrapolate") {

		text += "<h1>Extrapolation</h1>";

		text += "One major problem we faced was that many of the object files we found were optimised for file size. Much of the object details were found instead on a separate texture map file or depended heavily on lighting and shading to give an illusion of high details.<br><br><br><br>";

		text += "<img src='Sidebar/images/Shadows.png'><br><br><br><br>";

		text += "There is then a need to create interpolated vertices so that more triangles can be drawn. This gives an object more definition and enhance its visual effect.<br><br><br><br>";

		text += "<img src='Sidebar/images/Interpolation II.png'><br><br>";

	}

	else if (divid=="portable") {

		text += "<h1>Portability</h1>";

		text += "We had designed the code with object oriented programming in mind because it entailed the concept of modularity. This allowed for the system to accommodate the influx of new and innovative technologies with respect to human computer interaction. This includes input gesture devices, output visual systems and even intermediary algorithms for performance.<br><br><br><br>";

		text += "<img src='Sidebar/images/Oculus.png'><br><br>";

	}

	else if (divid=="flair") {

		text += "<h1>Visual Flair</h1>";

		text += "Many visual tools have the functionality of point markers which are useful for indicating a specific area i.e. abnormalities in a medical scan, location on map.<br><br><br>";

		text += "We aim to achieve a similar effect albeit with more visual flair by placing particle attractors at strategic locations. A fixed number of freely moving particles will be generated in the scene and they would gravitate towards the attractors and this would then draw the attention of the user.<br><br>";

		text += "<img src='Sidebar/images/Attractor.png'><br><br>";

	}

	else if (divid=="credits") {

		text += "<h1>Thank You</h1><br>";

	}

	else {
		text += "Error: Missing Information!<br>";
	}

	document.getElementById('textwall').innerHTML = text;
}