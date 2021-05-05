package sn.formation.java;

import sn.formation.java.interfaces.IDanseur;

public class Danseur implements IDanseur {

	@Override
	public void danser() {
		System.out.println("Je sais danser...");
	}
}
