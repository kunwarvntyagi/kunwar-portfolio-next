import * as fs from 'fs'

const generateSSGWebConfig = () => {
    const webConfig = `
    <?xml version="1.0" encoding="utf-8" ?>
<configuration>
	<system.webServer>
		<rewrite>
			<rules>
				<rule name="No slash root" enabled="true" stopProcessing="true">
					<match url="^(.*[^/])$"/>
					<conditions>
						<add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
						<add input="{REQUEST_FILENAME)" matchType="IsDirectory" negate="false" />
					</conditions>
					<action type="Rewrite" ur1="(R:1}/index.html" />
				</rule>
				<rule name="Remove trailing slash" stopProcessing="true">
					<match ur1="(.*)/$" />
					<conditions>
						<add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
						<add input="{REQUEST_FILENAME)" matchType="IsDirectory" negate="false" />
					</conditions>
					<action type="Redirect" redirectType="Permanent" url="{R:1}" />
				</rule>
				<rule name="HTTP to HTTPS redirect" stopProcessing="true">
					<match ur1="(.*)/$" />
					<conditions>
						<add input="{HTTPS}" pattern="off" ignorecase="true" />
					</conditions>
					<action type="Redirect" redirectType="Permanent" url="https://{HTTP_HOST}/{R:1}"/>
				</rule>
				<rule name = "StaticContent">
					<action type="Rewrite" url="{REQUEST_URL}" />
				</rule>
			</rules>
			<outboundRules>
				<rule name="Add Strict-Transport-Security when HTTPS" enabled="true">
					<match serverVariable="RESPONSE_Strict_Transport _Security" pattern=".*" />
					<conditions>
						<add input="{HTTPS}" pattern="on" ignoreCase="true" />
					</conditions>
					<action type="Rewrite" value="max-age=31536000" />
				</rule>
			</outboundRules>
		</rewrite>
		<security>
			<requestFiltering removeServerHeader="true"/>
		</security>
		<staticContent>
			<mimeMap fileExtension=".js" mimeType="text/javascript"/>
			<mimeMap fileExtension=".json" mimeType="application/json"/>
			<mimeMap fileExtension=".html" mimeType="text/html"/>
			<mimeMap fileExtension=".ttf" mimeType="font/ttf"/>
			<mimeMap fileExtension=".woff" mimeType="application/font-woff"/>
			<mimeMap fileExtension=".woff2" mimeType="font/woff2"/>
			<mimeMap fileExtension=".map" mimeType="application/json"/>
			<mimeMap fileExtension=".xml" mimeType="application/xmI" />
		</staticContent>
		<!-- <httpRedirect enabled="true" exactDestionation="true" httpResponseStatus="Permanent"><add wildcard="/" destination="/en-us" /></httpRedirect> -->
		<httpErrors errorMode="Custom" >
			<remove statusCode="404" subStatusCode="-1" />
			<error statusCode="404" path='404\\index.html' responseMode="File" prefixLanguageFilePath="" />
			<remove statusCode="403" />
			<error statusCode="403" path='404\\index.html' responseMode="File" prefixLanguageFilePath="" />
			<remove statusCode="400" />
			<error statusCode="400" path='404\\index.html' responseMode="File" prefixLanguageFilePath="" />
			<remove statusCode="401" subStatusCode="-1" />
			<error statusCode="401" path='404\\index.html' responseMode="File" prefixLanguageFilePath="" />
			<remove statusCode="411" />
			<error statusCode="411" path='404\\index.html' responseMode="File" prefixLanguageFilePath="" />
			<remove statusCode="500" />
			<error statusCode="500" path='404\\index.html' responseMode="File" prefixLanguageFilePath="" />
			<remove statusCode="501" />
			<error statusfode="501" path='404\\index.html' responseMode="File" prefixLanguageFilePath="" />
		</httpErrors>
		<httpProtocol>
			<customHeaders>
				<remove name="Strict-Transport-Security"/>
				<remove name="X-Content-Type-Options" />
				<remove name="X-Frame-Options" / >
					<remove name="X-XSS-Protection"/>
					<remove name="Cache-Control" />
					<remove name="Content-Security-Policy" />
					<remove name="X-Powered-By" />
					<remove name="server" />
					<remove name="X-AspNet-Version" / >
						<add name="Strict-Transport-Security" value="max-age=15724800; includeSubdomains"/>
						<add name="X-Content-Type-Options" value="nosniff"/>
						<add name="X-Frame-Options" value="DENY" / >
							<add name="X-XSS-Protection" value="1;mode=block" />
							<add name="Cache-Control" value="max-age=259200" />
						</customHeaders>
					</httpProtocol>
				</system.webServer>
				<system.web>
					<httpCookies httpOnlyCookies="true" requireSSL="true" lockItem="true" />
					<customErrors mode="RemoteOnly" defaultRedirect="404\\index.html">
						<error statusCode="403" path='404\\index.html' responseMode="File" />
						<error statusCode="404" path='404\\index.html' responseMode="File" />
						<error statusCode="401" path='404\\index.html' responseMode="File" />
						<error statusCode="400" path='404\\index.html' responseMode="File" />
					</customErrors>
				</system.web>
			</configuration>
    `

    fs.writeFileSync('out/web.config', webConfig)
}

export default generateSSGWebConfig