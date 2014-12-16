var fadeDuration = 0.17;
var framesPerSecond = 10.0;
var frames : Texture2D[];

private var indice:int = 0;
private var pingpong:int=1;

function FixedUpdate () {
    var lerp:float = Mathf.PingPong (Time.time, fadeDuration) / fadeDuration;
	indice = Time.time * framesPerSecond;
	indice = indice % frames.Length;

	if (lerp>0.9 && pingpong==1){
		renderer.material.SetTexture( "_TexMat1",frames[indice]);
		pingpong=2;
	}
	
	if (lerp<0.1 && pingpong==2){
		renderer.material.SetTexture( "_TexMat2",frames[indice]);
		pingpong=1;
	}
	
    renderer.material.SetFloat( "_Blend", lerp );	
}

