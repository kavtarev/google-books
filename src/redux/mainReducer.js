const LOAD = 'LOAD'

let initialState = {
    isLoading: false,
    items: [
        {
            kind: 'books#volume',
            id: 'zYw3sYFtz9kC',
            etag: 'QaCCHOliIgw',
            selfLink: 'https://www.googleapis.com/books/v1/volumes/zYw3sYFtz9kC',
            volumeInfo: {
                title: 'The Contemporary Thesaurus of Search Terms and Synonyms',
                subtitle: 'A Guide for Natural Language Computer Searching',
                authors: ['Sara D. Knapp'],
                publisher: 'Greenwood Publishing Group',
                publishedDate: '2000',
                description:
                    "Whether your search is limited to a single database or is as expansive as all of cyberspace, you won't find the intended results unless you use the words that work. Now in its second edition, Sara Knapp has updated and expanded this invaluable resource. Unlike any other thesaurus available, this popular guide offers a wealth of natural language options in a convenient, A-to-Z format. It's ideal for helping users find the appropriate word or words for computer searches in the humanities, social sciences, and business. The second edition has added more than 9,000 entries to the first edition's extensive list. Now, the Thesaurus contains almost 21,000 search entries! New or expanded areas include broader coverage of business terms and humanities-including arts literature, philosophy, religion, and music.",
                industryIdentifiers: [
                    {
                        type: 'ISBN_10',
                        identifier: '157356107X',
                    },
                    {
                        type: 'ISBN_13',
                        identifier: '9781573561075',
                    },
                ],
                readingModes: {
                    text: false,
                    image: true,
                },
                pageCount: 682,
                printType: 'BOOK',
                categories: ['Computers'],
                averageRating: 3,
                ratingsCount: 1,
                maturityRating: 'NOT_MATURE',
                allowAnonLogging: false,
                contentVersion: '1.1.1.0.preview.1',
                panelizationSummary: {
                    containsEpubBubbles: false,
                    containsImageBubbles: false,
                },
                imageLinks: {
                    smallThumbnail:
                        'http://books.google.com/books/content?id=zYw3sYFtz9kC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                    thumbnail:
                        'http://books.google.com/books/content?id=zYw3sYFtz9kC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
                },
                language: 'en',
                previewLink:
                    'http://books.google.ru/books?id=zYw3sYFtz9kC&pg=PR21&dq=search-terms&hl=&cd=1&source=gbs_api',
                infoLink:
                    'http://books.google.ru/books?id=zYw3sYFtz9kC&dq=search-terms&hl=&source=gbs_api',
                canonicalVolumeLink:
                    'https://books.google.com/books/about/The_Contemporary_Thesaurus_of_Search_Ter.html?hl=&id=zYw3sYFtz9kC',
            },
            saleInfo: {
                country: 'RU',
                saleability: 'NOT_FOR_SALE',
                isEbook: false,
            },
            accessInfo: {
                country: 'RU',
                viewability: 'PARTIAL',
                embeddable: true,
                publicDomain: false,
                textToSpeechPermission: 'ALLOWED',
                epub: {
                    isAvailable: false,
                },
                pdf: {
                    isAvailable: true,
                    acsTokenLink:
                        'http://books.google.ru/books/download/The_Contemporary_Thesaurus_of_Search_Ter-sample-pdf.acsm?id=zYw3sYFtz9kC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
                },
                webReaderLink:
                    'http://play.google.com/books/reader?id=zYw3sYFtz9kC&hl=&printsec=frontcover&source=gbs_api',
                accessViewStatus: 'SAMPLE',
                quoteSharingAllowed: false,
            },
            searchInfo: {
                textSnippet:
                    'The searcher needs to be aware of the context from which the \u003cb\u003esearch\u003c/b\u003e request is derived as well as the context in which the \u003cb\u003eterms\u003c/b\u003e will be \u003cb\u003esearched\u003c/b\u003e.',
            },
        },
        {
            kind: 'books#volume',
            id: 'mFT_CgAAQBAJ',
            etag: 'eq1/QgEFfuQ',
            selfLink: 'https://www.googleapis.com/books/v1/volumes/mFT_CgAAQBAJ',
            volumeInfo: {
                title: 'Search Terms: Alpha',
                authors: ['Travis Hill'],
                publisher: 'Travis Hill',
                description:
                    'College sophomore Tyler Gallagher loves computers, video games, and Thanksgiving Break. He\'s timed the arrival of his computer components with the holiday vacation from school to blast aliens and enemy soldiers alike on his brand new, high-end gaming computer. When the parts arrive, it soon becomes apparent that they aren\'t what he ordered from TechTerritory. Thinking he\'s the butt of a practical joke, Tyler plays along, and builds the computer with the obviously fake components. His annoyance turns to shock when the computer powers on. His shock turns to a mix of disbelief and wonder when he learns the strange "quantum" computer can pull web pages from the near future. Disbelief and wonder soon become fear and uncertainty when he discovers the future might not be so bright. "Search Terms: Alpha" is the first half of a new time travel thriller. 52,000 word novel Adult themes / language / mild sexual content',
                readingModes: {
                    text: true,
                    image: true,
                },
                pageCount: 150,
                printType: 'BOOK',
                categories: ['Fiction'],
                maturityRating: 'NOT_MATURE',
                allowAnonLogging: false,
                contentVersion: '1.3.3.0.preview.3',
                panelizationSummary: {
                    containsEpubBubbles: false,
                    containsImageBubbles: false,
                },
                imageLinks: {
                    smallThumbnail:
                        'http://books.google.com/books/content?id=mFT_CgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                    thumbnail:
                        'http://books.google.com/books/content?id=mFT_CgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
                },
                language: 'en',
                previewLink:
                    'http://books.google.ru/books?id=mFT_CgAAQBAJ&pg=PT215&dq=search-terms&hl=&cd=2&source=gbs_api',
                infoLink:
                    'https://play.google.com/store/books/details?id=mFT_CgAAQBAJ&source=gbs_api',
                canonicalVolumeLink: 'https://play.google.com/store/books/details?id=mFT_CgAAQBAJ',
            },
            saleInfo: {
                country: 'RU',
                saleability: 'FOR_SALE',
                isEbook: true,
                listPrice: {
                    amount: 88.78,
                    currencyCode: 'RUB',
                },
                retailPrice: {
                    amount: 88.78,
                    currencyCode: 'RUB',
                },
                buyLink:
                    'https://play.google.com/store/books/details?id=mFT_CgAAQBAJ&rdid=book-mFT_CgAAQBAJ&rdot=1&source=gbs_api',
                offers: [
                    {
                        finskyOfferType: 1,
                        listPrice: {
                            amountInMicros: 88780000,
                            currencyCode: 'RUB',
                        },
                        retailPrice: {
                            amountInMicros: 88780000,
                            currencyCode: 'RUB',
                        },
                    },
                ],
            },
            accessInfo: {
                country: 'RU',
                viewability: 'PARTIAL',
                embeddable: true,
                publicDomain: false,
                textToSpeechPermission: 'ALLOWED',
                epub: {
                    isAvailable: true,
                },
                pdf: {
                    isAvailable: true,
                },
                webReaderLink:
                    'http://play.google.com/books/reader?id=mFT_CgAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
                accessViewStatus: 'SAMPLE',
                quoteSharingAllowed: false,
            },
            searchInfo: {
                textSnippet:
                    '&quot;\u003cb\u003eSearch Terms\u003c/b\u003e: Alpha&quot; is the first half of a new time travel thriller. &quot;\u003cb\u003eSearch Terms\u003c/b\u003e: Beta&quot; coming soon! 52,000 word novel Adult themes/language/mild sexual&nbsp;...',
            },
        },
        {
            kind: 'books#volume',
            id: 'tsnKDwAAQBAJ',
            etag: 's9xRgrtlYPk',
            selfLink: 'https://www.googleapis.com/books/v1/volumes/tsnKDwAAQBAJ',
            volumeInfo: {
                title: 'From Hope to Horror',
                subtitle: 'Diplomacy and the Making of the Rwanda Genocide',
                authors: ['Joyce E. Leader'],
                publisher: 'U of Nebraska Press',
                publishedDate: '2020-03',
                description:
                    '"Former ambassador Joyce Leader was DCM in Kigali from 1991 until the genocide erupted in 1994 and is a recognized authority on the failed diplomatic efforts to avert the tragedy"--',
                industryIdentifiers: [
                    {
                        type: 'ISBN_13',
                        identifier: '9781640122451',
                    },
                    {
                        type: 'ISBN_10',
                        identifier: '1640122451',
                    },
                ],
                readingModes: {
                    text: false,
                    image: true,
                },
                pageCount: 440,
                printType: 'BOOK',
                categories: ['History'],
                maturityRating: 'NOT_MATURE',
                allowAnonLogging: false,
                contentVersion: '0.4.1.0.preview.1',
                panelizationSummary: {
                    containsEpubBubbles: false,
                    containsImageBubbles: false,
                },
                imageLinks: {
                    smallThumbnail:
                        'http://books.google.com/books/content?id=tsnKDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                    thumbnail:
                        'http://books.google.com/books/content?id=tsnKDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
                },
                language: 'en',
                previewLink:
                    'http://books.google.ru/books?id=tsnKDwAAQBAJ&pg=PA370&dq=search-terms&hl=&cd=3&source=gbs_api',
                infoLink:
                    'http://books.google.ru/books?id=tsnKDwAAQBAJ&dq=search-terms&hl=&source=gbs_api',
                canonicalVolumeLink:
                    'https://books.google.com/books/about/From_Hope_to_Horror.html?hl=&id=tsnKDwAAQBAJ',
            },
            saleInfo: {
                country: 'RU',
                saleability: 'NOT_FOR_SALE',
                isEbook: false,
            },
            accessInfo: {
                country: 'RU',
                viewability: 'PARTIAL',
                embeddable: true,
                publicDomain: false,
                textToSpeechPermission: 'ALLOWED',
                epub: {
                    isAvailable: false,
                },
                pdf: {
                    isAvailable: true,
                    acsTokenLink:
                        'http://books.google.ru/books/download/From_Hope_to_Horror-sample-pdf.acsm?id=tsnKDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
                },
                webReaderLink:
                    'http://play.google.com/books/reader?id=tsnKDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
                accessViewStatus: 'SAMPLE',
                quoteSharingAllowed: false,
            },
            searchInfo: {
                textSnippet:
                    'February 27, 1993. https://foia.state.gov/Search/Search.aspx (\u003cb\u003eSearch Terms\u003c/b\u003e: 93 Kampala ol.485). American Embassy Cable Kigalioz.336.',
            },
        },
        {
            kind: 'books#volume',
            id: 'osAaZHcEbtkC',
            etag: 's2rXUo0I0r4',
            selfLink: 'https://www.googleapis.com/books/v1/volumes/osAaZHcEbtkC',
            volumeInfo: {
                title: 'Mastering Search Analytics',
                subtitle: 'Measuring SEO, SEM and Site Search',
                authors: ['Brent Chaters'],
                publisher: '"O\'Reilly Media, Inc."',
                publishedDate: '2011-10-07',
                description:
                    'Many companies still approach Search Engine Optimization (SEO) and paid search as separate initiatives. This in-depth guide shows you how to use these programs as part of a comprehensive strategy—not just to improve your site’s search rankings, but to attract the right people and increase your conversion rate. Learn how to measure, test, analyze, and interpret all of your search data with a wide array of analytic tools. Gain the knowledge you need to determine the strategy’s return on investment. Ideal for search specialists, webmasters, and search marketing managers, Mastering Search Analytics shows you how to gain better traffic and more revenue through your search efforts. Focus on conversion and usability—not on driving larger volumes of traffic Track the performance of your SEO and paid search keywords Apply techniques to monitor what your competitors are doing Understand the differences between mobile and desktop search Learn how social media impacts your search rankings and results Audit your site for problems that can affect users and search spiders Create dashboards and expanded reports for all of your search activities',
                industryIdentifiers: [
                    {
                        type: 'ISBN_13',
                        identifier: '9781449319076',
                    },
                    {
                        type: 'ISBN_10',
                        identifier: '1449319076',
                    },
                ],
                readingModes: {
                    text: true,
                    image: true,
                },
                pageCount: 400,
                printType: 'BOOK',
                categories: ['Computers'],
                maturityRating: 'NOT_MATURE',
                allowAnonLogging: true,
                contentVersion: '3.7.7.0.preview.3',
                panelizationSummary: {
                    containsEpubBubbles: false,
                    containsImageBubbles: false,
                },
                imageLinks: {
                    smallThumbnail:
                        'http://books.google.com/books/content?id=osAaZHcEbtkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                    thumbnail:
                        'http://books.google.com/books/content?id=osAaZHcEbtkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
                },
                language: 'en',
                previewLink:
                    'http://books.google.ru/books?id=osAaZHcEbtkC&pg=PA163&dq=search-terms&hl=&cd=4&source=gbs_api',
                infoLink:
                    'https://play.google.com/store/books/details?id=osAaZHcEbtkC&source=gbs_api',
                canonicalVolumeLink: 'https://play.google.com/store/books/details?id=osAaZHcEbtkC',
            },
            saleInfo: {
                country: 'RU',
                saleability: 'FOR_SALE',
                isEbook: true,
                listPrice: {
                    amount: 1342.79,
                    currencyCode: 'RUB',
                },
                retailPrice: {
                    amount: 1342.79,
                    currencyCode: 'RUB',
                },
                buyLink:
                    'https://play.google.com/store/books/details?id=osAaZHcEbtkC&rdid=book-osAaZHcEbtkC&rdot=1&source=gbs_api',
                offers: [
                    {
                        finskyOfferType: 1,
                        listPrice: {
                            amountInMicros: 1342790000,
                            currencyCode: 'RUB',
                        },
                        retailPrice: {
                            amountInMicros: 1342790000,
                            currencyCode: 'RUB',
                        },
                    },
                ],
            },
            accessInfo: {
                country: 'RU',
                viewability: 'PARTIAL',
                embeddable: true,
                publicDomain: false,
                textToSpeechPermission: 'ALLOWED',
                epub: {
                    isAvailable: true,
                },
                pdf: {
                    isAvailable: true,
                },
                webReaderLink:
                    'http://play.google.com/books/reader?id=osAaZHcEbtkC&hl=&printsec=frontcover&source=gbs_api',
                accessViewStatus: 'SAMPLE',
                quoteSharingAllowed: false,
            },
            searchInfo: {
                textSnippet:
                    'Site search allows you to see what your customers are actually entering as \u003cb\u003esearch terms\u003c/b\u003e without the search engine or your assumptions interfering in the&nbsp;...',
            },
        },
        {
            kind: 'books#volume',
            id: 'e1SuVP7w1QwC',
            etag: '0Ai/oAqZyZw',
            selfLink: 'https://www.googleapis.com/books/v1/volumes/e1SuVP7w1QwC',
            volumeInfo: {
                title: 'Research in Social Movements, Conflicts and Change',
                authors: ['Patrick G. Coy'],
                publisher: 'Emerald Group Publishing',
                publishedDate: '2013-07-01',
                description:
                    'This volume brings together multi-method research on political mobilization in the USA, rights in Peru, peacebuilding in Croatia and Israel/Palestine, local forums in the Occupy movement and a crowd behaviors in the context of university party riots.',
                industryIdentifiers: [
                    {
                        type: 'ISBN_13',
                        identifier: '9781781907337',
                    },
                    {
                        type: 'ISBN_10',
                        identifier: '1781907331',
                    },
                ],
                readingModes: {
                    text: true,
                    image: true,
                },
                pageCount: 332,
                printType: 'BOOK',
                categories: ['Social Science'],
                maturityRating: 'NOT_MATURE',
                allowAnonLogging: false,
                contentVersion: '1.1.1.0.preview.3',
                panelizationSummary: {
                    containsEpubBubbles: false,
                    containsImageBubbles: false,
                },
                imageLinks: {
                    smallThumbnail:
                        'http://books.google.com/books/content?id=e1SuVP7w1QwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                    thumbnail:
                        'http://books.google.com/books/content?id=e1SuVP7w1QwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
                },
                language: 'en',
                previewLink:
                    'http://books.google.ru/books?id=e1SuVP7w1QwC&pg=PA17&dq=search-terms&hl=&cd=5&source=gbs_api',
                infoLink:
                    'https://play.google.com/store/books/details?id=e1SuVP7w1QwC&source=gbs_api',
                canonicalVolumeLink: 'https://play.google.com/store/books/details?id=e1SuVP7w1QwC',
            },
            saleInfo: {
                country: 'RU',
                saleability: 'FOR_SALE',
                isEbook: true,
                listPrice: {
                    amount: 9899.33,
                    currencyCode: 'RUB',
                },
                retailPrice: {
                    amount: 9899.33,
                    currencyCode: 'RUB',
                },
                buyLink:
                    'https://play.google.com/store/books/details?id=e1SuVP7w1QwC&rdid=book-e1SuVP7w1QwC&rdot=1&source=gbs_api',
                offers: [
                    {
                        finskyOfferType: 1,
                        listPrice: {
                            amountInMicros: 9899330000,
                            currencyCode: 'RUB',
                        },
                        retailPrice: {
                            amountInMicros: 9899330000,
                            currencyCode: 'RUB',
                        },
                    },
                ],
            },
            accessInfo: {
                country: 'RU',
                viewability: 'PARTIAL',
                embeddable: true,
                publicDomain: false,
                textToSpeechPermission: 'ALLOWED',
                epub: {
                    isAvailable: true,
                    acsTokenLink:
                        'http://books.google.ru/books/download/Research_in_Social_Movements_Conflicts_a-sample-epub.acsm?id=e1SuVP7w1QwC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
                },
                pdf: {
                    isAvailable: true,
                    acsTokenLink:
                        'http://books.google.ru/books/download/Research_in_Social_Movements_Conflicts_a-sample-pdf.acsm?id=e1SuVP7w1QwC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
                },
                webReaderLink:
                    'http://play.google.com/books/reader?id=e1SuVP7w1QwC&hl=&printsec=frontcover&source=gbs_api',
                accessViewStatus: 'SAMPLE',
                quoteSharingAllowed: false,
            },
            searchInfo: {
                textSnippet:
                    'up to 1,000 search results) conducted in September, 2006. \u003cb\u003eSearch terms\u003c/b\u003e were vetted and pretested in a variety of ways and always paired key cause-related&nbsp;...',
            },
        },
        {
            kind: 'books#volume',
            id: 'BBWWAAAAMAAJ',
            etag: 'u8xpUX0+9Ho',
            selfLink: 'https://www.googleapis.com/books/v1/volumes/BBWWAAAAMAAJ',
            volumeInfo: {
                title: 'Using Computers in Legal Research',
                subtitle: 'A Guide to LEXIS and WESTLAW',
                authors: ['Christopher G. Wren', 'Jill Robinson Wren'],
                publisher: 'Adams & Ambrose Pub',
                publishedDate: '1994',
                industryIdentifiers: [
                    {
                        type: 'OTHER',
                        identifier: 'UOM:39015027296394',
                    },
                ],
                readingModes: {
                    text: false,
                    image: false,
                },
                pageCount: 815,
                printType: 'BOOK',
                categories: ['Computers'],
                maturityRating: 'NOT_MATURE',
                allowAnonLogging: false,
                contentVersion: '0.2.2.0.preview.0',
                panelizationSummary: {
                    containsEpubBubbles: false,
                    containsImageBubbles: false,
                },
                imageLinks: {
                    smallThumbnail:
                        'http://books.google.com/books/content?id=BBWWAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
                    thumbnail:
                        'http://books.google.com/books/content?id=BBWWAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
                },
                language: 'en',
                previewLink:
                    'http://books.google.ru/books?id=BBWWAAAAMAAJ&q=search-terms&dq=search-terms&hl=&cd=6&source=gbs_api',
                infoLink:
                    'http://books.google.ru/books?id=BBWWAAAAMAAJ&dq=search-terms&hl=&source=gbs_api',
                canonicalVolumeLink:
                    'https://books.google.com/books/about/Using_Computers_in_Legal_Research.html?hl=&id=BBWWAAAAMAAJ',
            },
            saleInfo: {
                country: 'RU',
                saleability: 'NOT_FOR_SALE',
                isEbook: false,
            },
            accessInfo: {
                country: 'RU',
                viewability: 'NO_PAGES',
                embeddable: false,
                publicDomain: false,
                textToSpeechPermission: 'ALLOWED',
                epub: {
                    isAvailable: false,
                },
                pdf: {
                    isAvailable: false,
                },
                webReaderLink:
                    'http://play.google.com/books/reader?id=BBWWAAAAMAAJ&hl=&printsec=frontcover&source=gbs_api',
                accessViewStatus: 'NONE',
                quoteSharingAllowed: false,
            },
            searchInfo: {
                textSnippet:
                    '628, 660, 667, 670 compound words 27-28, 34-36 connectors as establishing relationships among \u003cb\u003esearch terms\u003c/b\u003e 24,41.44, 158-62 derivation 23n equivalent search&nbsp;...',
            },
        },
        {
            kind: 'books#volume',
            id: 'EBIeEAAAQBAJ',
            etag: 'zZQFqixhb6k',
            selfLink: 'https://www.googleapis.com/books/v1/volumes/EBIeEAAAQBAJ',
            volumeInfo: {
                title: 'Basic Legal Research',
                subtitle: 'Tools and Strategies',
                authors: ['Amy E. Sloan'],
                publisher: 'Wolters Kluwer',
                publishedDate: '2021-01-31',
                description:
                    'This best-selling coursebook on legal research is known for its clear, step-by-step instruction in the basics. Using a building-block approach, Basic Legal Research: Tools and Strategies, Eighth Edition breaks material into discrete, readily comprehensible parts. Ideal as a course book or reference, this text emphasizes online research, with targeted coverage of print materials. Its comprehensive coverage and self-contained chapters offer flexibility to fit a variety of course structures. Useful pedagogy throughout the text includes end-of-chapter checklists, clear examples, and summary charts. Helpful sample pages and examples of research sources guide students through the presentation, and an accompanying workbook provides exercises to test comprehension and to apply legal research tools and strategies. New to the Eighth Edition: Completely revised material throughout, providing thorough instruction in the latest features and functions of the main research platforms. Updated coverage includes Westlaw, Lexis, and Bloomberg Law. Instruction now fully oriented toward online research: Early chapters address online search strategies and use sample searches to illustrate how to draft a word search. Chapters on individual sources focus primarily on online search techniques while still incorporating targeted descriptions of print sources. Citation explanations cover both the ALWD Guide to Legal Citation (7th ed.) and the Bluebook (21st ed.). New material on citation literacy explains how citation formats communicate weight of authority. Professors and student will benefit from: Clear, step-by-step instruction covering the basics of legal research A building-block approach that breaks the material into discrete and comprehensible parts Self-contained chapters on research sources that make the book adaptable to any type of legal research course End-of-chapter checklists, numerous examples, and summary charts that aid in understanding, retention, and review Updated sample pages, screen shots, and references to research sources',
                industryIdentifiers: [
                    {
                        type: 'ISBN_13',
                        identifier: '9781543825275',
                    },
                    {
                        type: 'ISBN_10',
                        identifier: '1543825273',
                    },
                ],
                readingModes: {
                    text: false,
                    image: true,
                },
                pageCount: 320,
                printType: 'BOOK',
                categories: ['Law'],
                maturityRating: 'NOT_MATURE',
                allowAnonLogging: false,
                contentVersion: '0.2.0.0.preview.1',
                panelizationSummary: {
                    containsEpubBubbles: false,
                    containsImageBubbles: false,
                },
                imageLinks: {
                    smallThumbnail:
                        'http://books.google.com/books/content?id=EBIeEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                    thumbnail:
                        'http://books.google.com/books/content?id=EBIeEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
                },
                language: 'en',
                previewLink:
                    'http://books.google.ru/books?id=EBIeEAAAQBAJ&pg=PA46&dq=search-terms&hl=&cd=7&source=gbs_api',
                infoLink:
                    'http://books.google.ru/books?id=EBIeEAAAQBAJ&dq=search-terms&hl=&source=gbs_api',
                canonicalVolumeLink:
                    'https://books.google.com/books/about/Basic_Legal_Research.html?hl=&id=EBIeEAAAQBAJ',
            },
            saleInfo: {
                country: 'RU',
                saleability: 'NOT_FOR_SALE',
                isEbook: false,
            },
            accessInfo: {
                country: 'RU',
                viewability: 'PARTIAL',
                embeddable: true,
                publicDomain: false,
                textToSpeechPermission: 'ALLOWED',
                epub: {
                    isAvailable: false,
                },
                pdf: {
                    isAvailable: false,
                },
                webReaderLink:
                    'http://play.google.com/books/reader?id=EBIeEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
                accessViewStatus: 'SAMPLE',
                quoteSharingAllowed: false,
            },
            searchInfo: {
                textSnippet:
                    'You can control the \u003cb\u003esearch\u003c/b\u003e results more precisely with \u003cb\u003eterms\u003c/b\u003e and connectors ... types of \u003cb\u003eword searching\u003c/b\u003e because you use commands to steer the \u003cb\u003esearch\u003c/b\u003e logic.',
            },
        },
        {
            kind: 'books#volume',
            id: 'gqDf__ULmR8C',
            etag: 'OAt7CPZgajA',
            selfLink: 'https://www.googleapis.com/books/v1/volumes/gqDf__ULmR8C',
            volumeInfo: {
                title: 'Flexible Query Answering Systems',
                subtitle:
                    '8th International Conference, FQAS 2009, Roskilde, Denmark, October 26-28, 2009, Proceedings',
                authors: [
                    'Troels Andreasen',
                    'Ronald R. Yager',
                    'Henrik Bulskov',
                    'Henning Christiansen',
                    'Henrik Legind Larsen',
                ],
                publisher: 'Springer Science & Business Media',
                publishedDate: '2009-10-15',
                description:
                    'This volume constitutes the Proceedings of the 8th International Conference on Flexible Query Answering Systems, FQAS 2009, held in Roskilde, Denmark, October 26–28, 2009. FQAS 2009 was preceded by the 1994, 1996 and 1998 editions held in Roskilde, Denmark, the FQAS 2000 held in Warsaw, Poland, the 2002 held in Copenhagen, Denmark, and the 2004 and 2006 editions held in Lyon, France, and in Milan, Italy, respectively. FQAS is the premier conference concerned with the very important issue of providing users of information systems with ?exible querying capabilities, and withaneasyandintuitiveaccesstoinformation.Themainobjectiveistoachieve more expressive, informative, cooperative, and productive systems which faci- tate retrieval from information repositories such as databases, libraries, hete- geneous archives and the World-Wide Web. In targeting this objective, the c- ference draws on several research areas, such as information retrieval, database management, information ?ltering, knowledge representation, soft computing, management of multimedia information, and human–computer interaction. The conference provides a unique opportunity for researchers, developers and pr- titioners to explore new ideas and approaches in a multidisciplinary forum. The overalltopic of the FQAS conferences is innovative query systems aimed at providing easy, ?exible and human-friendly access to information. Such s- tems arebecoming increasinglyimportantalsodue to the huge andalwaysgr- ing number of users as well as the growing amount of available information.',
                industryIdentifiers: [
                    {
                        type: 'ISBN_13',
                        identifier: '9783642049569',
                    },
                    {
                        type: 'ISBN_10',
                        identifier: '3642049567',
                    },
                ],
                readingModes: {
                    text: false,
                    image: true,
                },
                pageCount: 676,
                printType: 'BOOK',
                categories: ['Computers'],
                maturityRating: 'NOT_MATURE',
                allowAnonLogging: false,
                contentVersion: 'preview-1.0.0',
                panelizationSummary: {
                    containsEpubBubbles: false,
                    containsImageBubbles: false,
                },
                imageLinks: {
                    smallThumbnail:
                        'http://books.google.com/books/content?id=gqDf__ULmR8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                    thumbnail:
                        'http://books.google.com/books/content?id=gqDf__ULmR8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
                },
                language: 'en',
                previewLink:
                    'http://books.google.ru/books?id=gqDf__ULmR8C&pg=PA180&dq=search-terms&hl=&cd=8&source=gbs_api',
                infoLink:
                    'http://books.google.ru/books?id=gqDf__ULmR8C&dq=search-terms&hl=&source=gbs_api',
                canonicalVolumeLink:
                    'https://books.google.com/books/about/Flexible_Query_Answering_Systems.html?hl=&id=gqDf__ULmR8C',
            },
            saleInfo: {
                country: 'RU',
                saleability: 'NOT_FOR_SALE',
                isEbook: false,
            },
            accessInfo: {
                country: 'RU',
                viewability: 'PARTIAL',
                embeddable: true,
                publicDomain: false,
                textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
                epub: {
                    isAvailable: false,
                },
                pdf: {
                    isAvailable: true,
                    acsTokenLink:
                        'http://books.google.ru/books/download/Flexible_Query_Answering_Systems-sample-pdf.acsm?id=gqDf__ULmR8C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
                },
                webReaderLink:
                    'http://play.google.com/books/reader?id=gqDf__ULmR8C&hl=&printsec=frontcover&source=gbs_api',
                accessViewStatus: 'SAMPLE',
                quoteSharingAllowed: false,
            },
            searchInfo: {
                textSnippet:
                    'In our proposal, at each iteration of the \u003cb\u003esearch\u003c/b\u003e process, ... A disambiguated \u003cb\u003equery\u003c/b\u003e is then generated from each group: this \u003cb\u003equery\u003c/b\u003e highlights the main&nbsp;...',
            },
        },
        {
            kind: 'books#volume',
            id: 'kzctDwAAQBAJ',
            etag: 'L5Ze1TQVG74',
            selfLink: 'https://www.googleapis.com/books/v1/volumes/kzctDwAAQBAJ',
            volumeInfo: {
                title: 'Genealogy For Dummies',
                authors: ['Matthew L. Helm', 'April Leigh Helm'],
                publisher: 'John Wiley & Sons',
                publishedDate: '2017-07-17',
                description:
                    "The fun way to research your family history Genealogy For Dummies, 8th Edition covers everything you need to know about starting a genealogical research project—including where and how to find information, how to communicate with other online genealogists, how to leverage social networking sites and apps, how to add digital images to your family tree, and how to build your own site for sharing information. It also explains the use of compiled genealogies, U.S. Census information, and public access catalogs. Brand new to this edition is content on how to conduct genealogical research on the road, and on how to take this research and integrate it into the data found at home. It also contains new information on DNA research and testing, new geocoding applications to record geographic data into a genealogical database, and other new technologies. The book covers which apps are worth your money, and how to get the most out of them. Use the latest tools to research family history Create your own site to showcase your family tree, digital images, and compiled genealogies Get access to free versions of Legacy Family Tree and Personal Ancestral Files Utilize both online and offline research techniques and tools Follow the clues to uncover your family's legacy—and have fun along the way!",
                industryIdentifiers: [
                    {
                        type: 'ISBN_13',
                        identifier: '9781119411963',
                    },
                    {
                        type: 'ISBN_10',
                        identifier: '1119411963',
                    },
                ],
                readingModes: {
                    text: false,
                    image: true,
                },
                pageCount: 408,
                printType: 'BOOK',
                categories: ['Reference'],
                maturityRating: 'NOT_MATURE',
                allowAnonLogging: false,
                contentVersion: '0.2.1.0.preview.1',
                panelizationSummary: {
                    containsEpubBubbles: false,
                    containsImageBubbles: false,
                },
                imageLinks: {
                    smallThumbnail:
                        'http://books.google.com/books/content?id=kzctDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                    thumbnail:
                        'http://books.google.com/books/content?id=kzctDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
                },
                language: 'en',
                previewLink:
                    'http://books.google.ru/books?id=kzctDwAAQBAJ&pg=PA180&dq=search-terms&hl=&cd=9&source=gbs_api',
                infoLink:
                    'http://books.google.ru/books?id=kzctDwAAQBAJ&dq=search-terms&hl=&source=gbs_api',
                canonicalVolumeLink:
                    'https://books.google.com/books/about/Genealogy_For_Dummies.html?hl=&id=kzctDwAAQBAJ',
            },
            saleInfo: {
                country: 'RU',
                saleability: 'NOT_FOR_SALE',
                isEbook: false,
            },
            accessInfo: {
                country: 'RU',
                viewability: 'PARTIAL',
                embeddable: true,
                publicDomain: false,
                textToSpeechPermission: 'ALLOWED',
                epub: {
                    isAvailable: false,
                },
                pdf: {
                    isAvailable: false,
                },
                webReaderLink:
                    'http://play.google.com/books/reader?id=kzctDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
                accessViewStatus: 'SAMPLE',
                quoteSharingAllowed: false,
            },
            searchInfo: {
                textSnippet:
                    'This term searches for content with Georg Helm or George Helm with a number between 1723 and ... To do this, use intitle or allintitle in your \u003cb\u003esearch terms\u003c/b\u003e.',
            },
        },
        {
            kind: 'books#volume',
            id: 'XgbhAAAAMAAJ',
            etag: 'r056gEjdOOU',
            selfLink: 'https://www.googleapis.com/books/v1/volumes/XgbhAAAAMAAJ',
            volumeInfo: {
                title: 'Search INFORM.',
                publishedDate: '1986',
                industryIdentifiers: [
                    {
                        type: 'OTHER',
                        identifier: 'UOM:39015014765765',
                    },
                ],
                readingModes: {
                    text: false,
                    image: false,
                },
                printType: 'BOOK',
                categories: ['ABI/INFORM (Information retrieval system)'],
                maturityRating: 'NOT_MATURE',
                allowAnonLogging: false,
                contentVersion: '0.2.2.0.preview.0',
                panelizationSummary: {
                    containsEpubBubbles: false,
                    containsImageBubbles: false,
                },
                imageLinks: {
                    smallThumbnail:
                        'http://books.google.com/books/content?id=XgbhAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
                    thumbnail:
                        'http://books.google.com/books/content?id=XgbhAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
                },
                language: 'en',
                previewLink:
                    'http://books.google.ru/books?id=XgbhAAAAMAAJ&q=search-terms&dq=search-terms&hl=&cd=10&source=gbs_api',
                infoLink:
                    'http://books.google.ru/books?id=XgbhAAAAMAAJ&dq=search-terms&hl=&source=gbs_api',
                canonicalVolumeLink:
                    'https://books.google.com/books/about/Search_INFORM.html?hl=&id=XgbhAAAAMAAJ',
            },
            saleInfo: {
                country: 'RU',
                saleability: 'NOT_FOR_SALE',
                isEbook: false,
            },
            accessInfo: {
                country: 'RU',
                viewability: 'NO_PAGES',
                embeddable: false,
                publicDomain: false,
                textToSpeechPermission: 'ALLOWED',
                epub: {
                    isAvailable: false,
                },
                pdf: {
                    isAvailable: false,
                },
                webReaderLink:
                    'http://play.google.com/books/reader?id=XgbhAAAAMAAJ&hl=&printsec=frontcover&source=gbs_api',
                accessViewStatus: 'NONE',
                quoteSharingAllowed: false,
            },
            searchInfo: {
                textSnippet:
                    'Multiword terms must be hyphenated. To \u003cb\u003esearch terms\u003c/b\u003e that include field codes or explanatory terms, remove parentheses and hyphenate, e.g. OVERHEAD-COSTS ACC&nbsp;...',
            },
        },
    ],
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return state

        default:
            return state
    }
}

export default mainReducer
