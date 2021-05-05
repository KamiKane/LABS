package sn.formation.java.runtime;

import sn.formation.java.Personne;

public class App {

	public static void main(String[] args) {
		System.out.println("Création d'une personne.");
		Personne p1 = new Personne("NDOYE", "Baye Serigne", 'M', 24);
		p1.sePresenter();
		p1.nager();
		p1.danser();
		System.out.println("Nombre de personnes créées : "+ Personne.getNbPersonnes());
	}

}
