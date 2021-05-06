<?xml version="1.0" encoding="UTF-8"?>

<!-- New XSLT document created with EditiX XML Editor (http://www.editix.com) at Thu May 06 01:04:01 GMT 2021 -->

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="html"/>
	
	<xsl:template match="/">
	<html>
		<body>
		
		
		<table>
			<tr>
				<td>
					<h2>Image</h2>
				</td>
				<td>
					<ul>
						<li><xsl:value-of select="user/nom"/></li>
						<li><xsl:value-of select="user/prenom"/></li>
						<li><xsl:value-of select="user/dateNaissance"/></li>
						
					</ul>
				</td>
				<td>
					<h2>Contact</h2>
					<ul>
						<li>Tel :<xsl:value-of select="user/contact/tel"/></li>
						<li>Email : <xsl:value-of select="user/contact/email"/></li>
						<li>Addresse : <xsl:value-of select="user/contact/addresse"/></li>
						
					</ul>
				</td>
			</tr>
		</table>
		<h2>Exprérience</h2>
		<table>
			<xsl:for-each select="user/cv/experience/exp">
			<tr>
				<td><xsl:value-of select="dateDebut"/> - <xsl:value-of select="dateFin"/></td>
				<td><xsl:value-of select="description"/></td>
				<td><xsl:value-of select="organisation"/></td>
			</tr>
			</xsl:for-each>
			
		</table>
		<h2>Formation</h2>
		<table>
			<xsl:for-each select="user/cv/formation/form">
			<tr>
				<td><xsl:value-of select="dateDebut"/> - <xsl:value-of select="dateFin"/></td>
				<td><xsl:value-of select="description"/></td>
				<td><xsl:value-of select="etablissement"/></td>
			</tr>
			</xsl:for-each>
			
		</table>
		<h2>Compétences</h2>
		<table>
			<xsl:for-each select="user/cv/competence/comp">
			<tr>
				<td><xsl:value-of select="description"/></td>
			</tr>
			</xsl:for-each>
			
		</table>
	
		</body>
	</html>
	</xsl:template>

</xsl:stylesheet>


