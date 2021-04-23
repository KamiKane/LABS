package sn.app;

public class personne {
	
	//Attributs d'instances
	private String nom;
	private String prenom;
	private char sex;
	private int age;
	
	
	
	public personne(String nom, String prenom, char sex, int age) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.sex = sex;
		this.setAge (age);
		
		//..
		nbPersonnes ++;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public char getSex() {
		return sex;
	}

	public void setSex(char sex) {
		this.sex = sex;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		if (age > 0) {
			this.age = age;
		}
		
	}

	
	//Attributs de classe
	private static int nbPersonnes;
	
	//M�thodes d'instances
	public void sePresenter () {
		System.out.println(this);
		
	}
	
	
	
	@Override
	public String toString() {
		return "personne [nom=" + nom + ", prenom=" + prenom + ", sex=" + sex + ", age=" + age + "]";
	}

	//M�thodes de classe (peut etre utilis� sans qu'il y est d'objet; elle est li�e � la classe (static))
	public static int getNbPersonnes() {
		return nbPersonnes;
	}
	

}
