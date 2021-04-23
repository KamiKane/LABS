<?xml version="1.0" encoding="UTF-8"?>  


<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="html"/>
	
	<xsl:template match="/">
	<html>
		<body>
			<h1>Liste des étudiants de M1 MPSI</h1>
			<table border="2"  >
			            <tr  bgcolor="#9CAD32">
			                <th>Matricule</th>
			                <th>Nom</th>
			                <th>Prenom</th>
			                <th>classe</th>
			                <th>Adresse</th>
			                <th>Moyenne</th>
			            </tr>
			            <xsl:for-each select="esmt/etudiant">	
			            <tr>
			                    <td><xsl:value-of select="matricule"/></td>
			                    <td><xsl:value-of select="nom"/></td>
			                    <td><xsl:value-of select="prenom"/></td>
			                    <td><xsl:value-of select="classe"/></td>
			                    <td><xsl:value-of select="adresse"/></td>
			                    <td><xsl:value-of select="moyenne"/></td>
			            </tr>
			            </xsl:for-each>		            	         
		        </table>
		
		</body>
	</html>
	</xsl:template>

</xsl:stylesheet>
