package sn.formation.java;

import sn.formation.java.interfaces.IPianiste;

public class Pianiste implements IPianiste {

	@Override
	public void jouerAuPiano() {
		System.out.println("Je sais jouer au Piano...");
	}

}
