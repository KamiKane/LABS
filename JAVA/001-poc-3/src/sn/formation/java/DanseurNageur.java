package sn.formation.java;

import sn.formation.java.interfaces.IDanseur;
import sn.formation.java.interfaces.INageur;

public class DanseurNageur implements IDanseur, INageur {

	@Override
	public void danser() {
		System.out.println("Je sais danser");
	}
	

}
