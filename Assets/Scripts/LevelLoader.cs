using UnityEngine;
using System.Collections;

public class LevelLoader : MonoBehaviour {

	
	// Update is called once per frame
	void Update () {


        if (Input.GetKeyDown(KeyCode.P))
        {

            int current = Application.loadedLevel;
            current++;

            if (current >= 4)
                current = 0;

            Application.LoadLevel(current);
        
        }

        if (Input.GetButtonDown("Cancel"))
            Application.Quit();

	}
}
