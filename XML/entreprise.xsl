 <?xml version="1.0" encoding="UTF-8"?>

<!-- New XSLT document created with EditiX XML Editor (http://www.editix.com) at Thu Apr 22 11:47:49 GMT 2021 -->

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >

	<xsl:output method="html"/>
	
	<xsl:template match="/">
	<html>
		<body>
		
		
<h1>Liste des Employés</h1>
		
		
<table border="1" cellspacing="5%"  >
		
	<tr>
		
		<th>Matricule	</th>
		
		<th>Nom</th>
		
		<th>Prénom	</th>
		
		<th>Service	</th>
		
		<th>Fonction	</th>
		
		<th>Salaire</th>
		
		<th>Situation Matrimoniale</th>
		
		<th>Tel (1)</th>
		
		<th>Tel (2)</th>
		
	</tr>
		
	<xsl:for-each select="entreprise/employe">
		
	<tr>
		
		
		
		<td><xsl:value-of select="matricule"/></td>
		
		<td><xsl:value-of select="nom"/></td>
		
		<td><xsl:value-of select="prenom"/></td>
		
		<td><xsl:value-of select="service"/></td>
		
		<td><xsl:value-of select="fonction"/></td>
		
		<td><xsl:value-of select="salaire"/></td>
		
		<td><xsl:value-of select="situationMatrimoniale"/></td>
		
		<td><xsl:value-of select="tel1"/></td>
		
		<td><xsl:value-of select="tel2"/></td>
		
		
		
	</tr>
		
	</xsl:for-each>
		
</table>
		
		</body>
	</html>
	</xsl:template>

</xsl:stylesheet>


