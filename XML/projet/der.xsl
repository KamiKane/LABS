<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="html"/>
	
	<xsl:template match="/">
	<html>
		<body>
		<h1>Direction Général de l'entrepenariat Rapide </h1>
		
		
<table>
		
	<tr>
		
		<th>Les Domaines d'investissements </th>
		
		<th>Les Responsables</th>
		
	</tr>
		
	<xsl:for-each select="der/domaine">
		
	<tr>
		
		<td>
		
			<a>
		
				<xsl:attribute name="href">
		
					<xsl:value-of select="url"/>
		
				</xsl:attribute>
		
			
		
				<xsl:value-of select="nomDomaine"/>
		
			</a>
		
		</td>
		
		<td><xsl:value-of select="responsable"/></td>
		
	</tr>
		
	</xsl:for-each>
		
	
		
</table>
		
		
		</body>
	</html>
	</xsl:template>

</xsl:stylesheet>


