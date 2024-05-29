[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ex6pWDJu)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=14994611&assignment_repo_type=AssignmentRepo)

# Predator's Eye by Eri Lovegrove
## Creative Coding 2: Custom Pixel

### Description
Predator's Eye is a lens that identifies native birds in images using AI and applies a filter. The concept of the filter is an abstract idea of how a native bird might look to the dangers they are subject to, either to predators or climate change. I wanted to convey this idea by making the general image express danger or discomfort, and have the focus be on the native birds. I did this by tinting the image red and inversing the colours, increasing the saturation and creating a pixel effect made of small crosses on the birds as well as overlaying a target on top. 

### Process
![Preview 1](preview1.jpg)\
1. my first bit of code was copied from Phoebe's example code here: 

![Image 1](preview2.jpg)\
2.Here I started experimenting with HSB values

![Image 2](preview3.jpg)\
 3. My initial code for creating 2 layers that I copied from the example code

![Image 3](preview4.jpg)\
 4. I created my own shape, a cross so that a cross hatching effect will be applied

![Image 4](preview5.jpg)\
 5. Here I inversed the colours and upped the saturation of the bird.

![Image 5](preview6.jpg)\
 6. Same thing with a different image

![Image 6](preview7.jpg)\
 7. I wanted the background to not be pixelated so the contast between the background and bird would be clearer

![Image 7](preview8.jpg)\
 8. I decided to tint the background red to express a more dangerous vibe.

![Image 8](preview9.jpg)\
 9. Here I copied another piece of example code to apply an image over the mask. reference: [scan mask example](https://github.com/23-2-DSDN242/mddn-242-data-mapping-dribnet/blob/79f02122f235bed44835c835343b9844dc906b10/sketch.js)

![Image 9](preview10.jpg)\
 10. Messing around with my own target and different colours

![Image 10](preview11.jpg)\
 11. Decided to make the target white to stand out against the red background

### AI mask outcomes
<img src="input_4.jpg" alt="takaheimage" width="300"/><img src="mask_4.png" alt="takahemask" width="300"/><img src="output_5.png" alt="takahefilter" width="300"/>
<img src="input_5.jpg" alt="seagullimage" width="300"/><img src="mask_5.png" alt="seagullmask" width="300"/><img src="output_6.png" alt="seagullfilter" width="300"/>
<img src="input_6.jpg" alt="seagullimage2" width="300"/><img src="mask_6.png" alt="seagullmask2" width="300"/><img src="output_7.png" alt="seagullfilter" width="300"/>
<img src="input_7.jpg" alt="greywarblerimage" width="300"/><img src="mask_7.png" alt="greywarblermask" width="300"/><img src="output_8.png" alt="greywarblerfilter" width="300"/>
<img src="input_8.jpg" alt="petrelimage" width="300"/><img src="mask_8.png" alt="petrelmask" width="300"/><img src="output_9.png" alt="petrelfilter" width="300"/>
<img src="input_9.jpg" alt="kakaimage" width="300"/><img src="mask_9.png" alt="kakamask" width="300"/><img src="output_4.png" alt="kakafilter" width="300"/>

Overall the AI identified these birds really well as I expected as the topic isn't anything too abstract. If I were to experiment further with AI testing, I would like to see if it would be able to identify NZ natives as opposed to introduced birds, or what it would choose to highlight between a mature bird and a chick. 