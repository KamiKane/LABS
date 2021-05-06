<?xml version="1.0" encoding="UTF-8"?>

<!-- New XSLT document created with EditiX XML Editor (http://www.editix.com) at Mon May 03 16:33:37 GMT 2021 -->


<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="html"/>
	
	<xsl:template match="/">
	<html>
		<body>
				
		<h1>Pêche</h1>
				
		<h3> Les projets </h3>
		
		<table>
			<xsl:for-each select="domaine/projet">
				<tr>
					<td><h3><xsl:value-of select="nom"/></h3></td>
				</tr>
				<tr>
					<td>
						<h4>Infos</h4>
						<ul> 
							<li> Responsabe : <xsl:value-of select="responsable"/></li>
							<li>Date de Début : <xsl:value-of select="dateDebut"/></li>
							<li>Durée : <xsl:value-of select="duree"/></li>
							<li>Budget : <xsl:value-of select="budget"/></li>
						</ul>
					</td>
					<td>
						<h4>Équipe</h4>
						
						<ul>
							<xsl:for-each select="equipe/membre">
							<li>
								<a>
									<xsl:attribute name="href">
										<xsl:value-of select="url"/>
									</xsl:attribute>
									<xsl:value-of select="nom"/>
								</a>
							</li>
							</xsl:for-each>
							
						</ul>
					</td>
				</tr>
			</xsl:for-each>
			
		</table>
				
		</body>
	</html>
	</xsl:template>

</xsl:stylesheet>



