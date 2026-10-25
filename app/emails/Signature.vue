<template>
    <EHtml>
        <EHead>
            <EStyle
                >body { padding: 32px; font-family: 'Arial', sans-serif;
                }</EStyle
            >
        </EHead>
        <EBody>
            <EContainer style="width: 600px">
                <ERow>
                    <EColumn style="width: 25%">
                        <EImg
                            style="object-fit: cover; border-radius: 1000px"
                            src="https://laure-everwyn.netlify.app/laure.jpg"
                            alt="Photo de Laure Everwyn"
                            :width="150"
                            :height="150"
                        />
                    </EColumn>
                    <EColumn style="width: 50%">
                        <ERow>
                            <EText
                                style="
                                    font-weight: 600;
                                    font-size: 28px;
                                    text-transform: uppercase;
                                    border-bottom: 1px solid black;
                                    padding-bottom: 24px;
                                    width: fit-content;
                                "
                                >Laure Everwyn</EText
                            >
                        </ERow>
                        <ERow style="padding: 4px 0">
                            <EColumn style="width: 18px; padding-right: 12px">
                                <EContainer
                                    style="
                                        background-color: #d9b8ff;
                                        padding: 4px;
                                        border-radius: 8px;
                                    "
                                >
                                    <EImg
                                        src="https://laure-everwyn.netlify.app/icons/phone.svg"
                                        alt="Icône de téléphone"
                                        :height="18"
                                        :width="18"
                                    />
                                </EContainer>
                            </EColumn>
                            <EColumn>
                                <ELink
                                    href="tel:0767178700"
                                    style="
                                        color: black;
                                        border-bottom: 1px solid black;
                                    "
                                >
                                    07.67.17.87.00
                                </ELink>
                            </EColumn>
                        </ERow>
                        <ERow style="padding: 4px 0">
                            <EColumn style="width: 18px; padding-right: 12px">
                                <EContainer
                                    style="
                                        background-color: #d9b8ff;
                                        padding: 4px;
                                        border-radius: 8px;
                                    "
                                >
                                    <EImg
                                        src="https://laure-everwyn.netlify.app/icons/mail.svg"
                                        alt="Icône d'email"
                                        :height="18"
                                        :width="18"
                                    />
                                </EContainer>
                            </EColumn>
                            <EColumn>
                                <ELink
                                    href="mailto:laure05everwyn@gmail.com"
                                    style="
                                        color: black;
                                        border-bottom: 1px solid black;
                                    "
                                    >laure05everwyn@gmail.com
                                </ELink>
                            </EColumn>
                        </ERow>
                        <ERow style="padding: 4px 0">
                            <EColumn style="width: 18px; padding-right: 12px">
                                <EContainer
                                    style="
                                        background-color: #d9b8ff;
                                        padding: 4px;
                                        border-radius: 8px;
                                    "
                                >
                                    <EImg
                                        src="https://laure-everwyn.netlify.app/icons/link.svg"
                                        alt="Icône de lien"
                                        :height="18"
                                        :width="18"
                                    />
                                </EContainer>
                            </EColumn>
                            <EColumn>
                                <ELink
                                    href="https://laure-everwyn.netlify.app/"
                                    style="
                                        color: black;
                                        border-bottom: 1px solid black;
                                    "
                                >
                                    https://laure-everwyn.netlify.app/
                                </ELink>
                            </EColumn>
                        </ERow>
                    </EColumn>
                </ERow>
            </EContainer>
        </EBody>
    </EHtml>
</template>
