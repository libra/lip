(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{163:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(9),s=(a(0),a(199)),i={lip:4,title:"Transaction Metadata Specification",authors:"Kevin Hurley (@kphfb)",status:"final",type:"informational",created:"06/26/2020"},o={id:"lip-4",title:"Transaction Metadata Specification",description:"# Summary",source:"@site/all-docs__GENERATED/lip-4.md",permalink:"/lip-4",editUrl:"https://github.com/libra/lip/edit/master/all-docs__GENERATED/lip-4.md"},c=[{value:"Submitting a transaction",id:"submitting-a-transaction",children:[]},{value:"Processing the transaction",id:"processing-the-transaction",children:[]},{value:"NC to NC transaction Flow",id:"nc-to-nc-transaction-flow",children:[]},{value:"NC to C Transaction Flow",id:"nc-to-c-transaction-flow",children:[]},{value:"C to NC transaction flow",id:"c-to-nc-transaction-flow",children:[]},{value:"Refunds",id:"refunds",children:[]},{value:"C to C transaction flow",id:"c-to-c-transaction-flow",children:[]}],l={rightToc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"summary"},"Summary"),Object(s.b)("hr",null),Object(s.b)("p",null,"Custodial wallets may want to identify specific users, such as merchants or individual consumers, that are the parties to an on-chain transaction. The Libra Payment Network leverages subaddressing to provide this functionality."),Object(s.b)("hr",null),Object(s.b)("h1",{id:"terminology"},"Terminology"),Object(s.b)("hr",null),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"subaddress:")," Accounts on-chain are represented by an address.  To allow multiplexing of a single address into multiple wallets, custodial wallets may utilize \u201csubaddresses\u201d under the on-chain address for each underlying user.  Although these subaddresses represent the users, they will have meaning only to the custodial wallet. The mapping from subaddress to user is not presented on-chain, but rather is an internal mapping known only by the custodial wallet.  The best practice is to use subaddresses as a dynamic single-use address to prevent linkability.  In this way, subaddresses serve as a many-to-one mapping between subaddresses and a user - where ideally subaddresses are not re-used for more than one payment."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"referenced_event:")," In the case where funds must be returned, referenced_event refers to the event sequence number of the original sender\u2019s sent payment event.  Since refunds are just another form of p2p transfer, the referenced event field allows a refunded payment to refer back to the original payment."),Object(s.b)("hr",null),Object(s.b)("h1",{id:"abstract--motivation"},"Abstract / Motivation"),Object(s.b)("hr",null),Object(s.b)("p",null,"Custodial wallets may want to identify specific users, such as merchants or individual consumers, that are the parties to an on-chain transaction.  The Libra Payment Network leverages subaddressing to provide this functionality. This document describes an approach to supporting this functionality by defining a standard that supports subaddressing to enable multiplexing a single account address into multiple wallets, enabling custodial wallets to maintain a single address rather than maintain numerous addresses."),Object(s.b)("hr",null),Object(s.b)("h1",{id:"specification"},"Specification"),Object(s.b)("hr",null),Object(s.b)("h1",{id:"the-lifetime-of-a-transaction-containing-metadata"},"The Lifetime of a Transaction Containing Metadata"),Object(s.b)("p",null,"The first step to submitting a transaction is producing the metadata. The sender first produces a ",Object(s.b)("em",{parentName:"p"},"Libra Canonically Serialized (LCS)")," metadata_wrapper consisting of an LCS-serialized Metadata object:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"enum Metadata {\n  Undefined,\n  GeneralMetadata(GeneralMetadata),\n  TravelRuleMetadata(TravelRuleMetadata),\n  UnstructuredBytesMetadata(UnstructuredBytesMetadata),\n}\n\n// Used for versioning of general metadata\nenum GeneralMetadata {\n    GeneralMetadataVersion0(GeneralMetadatav0),\n}\n\nstruct GeneralMetadatav0 {\n    // Subaddress to which the funds are being sent\n    Option<Vec<u8>> to_subaddress,\n\n    // Subaddress from which the funds are being sent\n    Option<Vec<u8>> from_subaddress,\n\n    // Event sequence number of the `SentPaymentEvent` that this transaction is refunding\n    Option<u64> referenced_event,\n}\n\n// Used for versioning of travel rule metadata\nenum TravelRuleMetadata {\n    TravelRuleMetadataVersion0(TravelRuleMetadataV0),\n}\n\nstruct TravelRuleMetadataV0 {\n    // Off-chain reference_id.  Used when off-chain APIs are used.\n    // Specifies the off-chain reference ID that was agreed upon in off-chain APIs.\n    Option<String> off_chain_reference_id,\n}\n\nstruct UnstructuredBytesMetadata {\n    // Unstructured bytes metadata\n    Option<Vec<u8>> metadata,\n}\n")),Object(s.b)("p",null,'Using the initial example described in the motivation, the merchant whose wallet\'s subaddress for this payment is "merch_a", is hosted by a custodial wallet with a public address of 0x1234 may post a URI for shoes that cost 20 microlibra.  The purchaser would then submit a transaction containing the following metadata:'),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),'0x01, 0x00, 01, "merch_a", 00, 00, 00\n/* general_metadata, general_metadata_v0,\n      to_subaddress_present, to_subaddress,\n      from_subaddress_not_present,\n      referenced_event_not_present */\n')),Object(s.b)("h2",{id:"submitting-a-transaction"},"Submitting a transaction"),Object(s.b)("p",null,"With the metadata in hand, the sender can now submit a transaction to the Libra block chain via a ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/transaction_scripts/doc/peer_to_peer_with_metadata.md"}),"deposit call")," in Move. Note that metadata_signature must only be present for travel-rule cases between VASPs and is utilized for dual attestation."),Object(s.b)("h2",{id:"processing-the-transaction"},"Processing the transaction"),Object(s.b)("p",null,"Much like any other funds transfer request, validators only verify that the sender has sufficient Libra Coins to support the transaction and that the transaction is properly formed and valid, and do not inspect or verify the correctness of the metadata."),Object(s.b)("p",null,"The recipient custodial wallet should make an effort to refund (via issuing a transaction in the reverse direction for the received amount minus gas costs) in the case of malformed metadata or an invalid subaddress for the recipient."),Object(s.b)("h1",{id:"transaction-examples"},"Transaction Examples"),Object(s.b)("p",null,"The following examples demonstrate how subaddressing and metadata are used in the transaction flow.  ",Object(s.b)("em",{parentName:"p"},"Note that the terminology \u201cNC\u201d will mean non-custodial account and \u201cC\u201d will mean a custodial account. We note that as per the Libra Association non-custodial, unhosted wallets will not be permitted to transact on the Libra Payment Network at launch.")),Object(s.b)("h2",{id:"nc-to-nc-transaction-flow"},"NC to NC transaction Flow"),Object(s.b)("p",null,"For NC to NC transactions, there is no usage of subaddressing/metadata."),Object(s.b)("h2",{id:"nc-to-c-transaction-flow"},"NC to C Transaction Flow"),Object(s.b)("p",null,"User A (address 0x1234) on a NC wallet wishes to send 100 microlibra to merchant B who is on a private custodial wallet (where the custodial wallet has a public address of 0x7777 and the merchant has a sub-account of 'bob').  User A's client now composes a raw transaction with the following relevant fields:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"metadata = Metadata::GeneralMetadata(\n  GeneralMetadata::GeneralMetadaVersion0(\n    GeneralMetadataV0 {\n      to_subaddress: 'bob',\n})));\n\nprogram = encode_peer_to_peer_with_metadata_script(\n    \"LBR\" /*currency*/,\n    0x7777 /*recipient*/,\n    100 /*amount*/,\n    lcs.serialize(metadata, Metadata),\n    None /*metadata_signature*/);\n\nRawTransaction {\n    sender_account: 0x1234,\n    program: program,\n}\n")),Object(s.b)("h2",{id:"c-to-nc-transaction-flow"},"C to NC transaction flow"),Object(s.b)("p",null,"User A who is on a custodial wallet (where the C wallet has a public address of 0x7777 and user A has a sub-account of 'alice') wishes to send 100 microlibra to merchant B who is on a NC wallet (with an address of 0x1234).  User A's wallet then composes a transaction via:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"metadata = Metadata::GeneralMetadata(\n  GeneralMetadata::GeneralMetadaVersion0(\n    GeneralMetadataV0 {\n      from_subaddress: 'alice',\n})));\n\nprogram = encode_peer_to_peer_with_metadata_script(\n    \"LBR\" /*currency*/,\n    0x1234 /*recipient*/,\n    100 /*amount*/,\n    lcs.serialize(metadata, Metadata),\n    None /*metadata_signature*/);\n\nRawTransaction {\n    sender_account: 0x7777,\n    program: program,\n}\n")),Object(s.b)("h2",{id:"refunds"},"Refunds"),Object(s.b)("p",null,"Merchant B now wishes to refund user A. But user A was sending from a custodial account so merchant B must send the funds back to the custodial account and include subaddress information so that the funds are directed back to user A.  Merchant B\u2019s client now constructs a transaction via the following where referenced_event is the committed event sequence number under the sending account of the original sent payment event:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"metadata = Metadata::GeneralMetadata(\n  GeneralMetadata::GeneralMetadaVersion0(\n    GeneralMetadataV0 {\n      to_subaddress: 'alice',\n      referenced_event: 123,\n})));\n\n\nprogram = encode_peer_to_peer_with_metadata_script(\n    \"LBR\" /*currency*/,\n    0x7777 /*recipient*/,\n    100 /*amount*/,\n    lcs.serialize(metadata, Metadata),\n    None /*metadata_signature*/);\n\nRawTransaction {\n    sender_account: 0x1234,\n    program: program,\n}\n")),Object(s.b)("h2",{id:"c-to-c-transaction-flow"},"C to C transaction flow"),Object(s.b)("p",null,"For transactions under the travel rule threshold, transaction metadata inclusive of both to_subaddress and from_subaddress should be composed."),Object(s.b)("p",null,"For transactions over the travel rule limit, custodial to custodial transactions must exchange travel rule compliance data off-chain, so the suggested way to exchange the metadata is during this off-chain exchange. This information should not be exchanged using subaddressing.  An example of this data exchange can be seen in LIP-1.  Once the off-chain APIs have been utilized, there will be an off-chain reference ID which represents this transaction.  The on-chain transaction is now constructed."),Object(s.b)("p",null,"User A who is on a custodial wallet (where the C wallet has a public address of 0x7777 and user A has a sub-account of 'alice') wishes to send 100 microlibra to merchant B who is on a C wallet (where the C wallet has a public address of 0x1234 and merchant B has a sub-account of 'bob').  User A's wallet then composes a transaction via (note that the to/from subaddresses are not included since they were shared via the off-chain API):"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),'metadata = Metadata::TravelRuleMetadata(\n  TravelRuleMetadata::TravelRuleMetadataVersion0(\n    TravelRuleMetadataV0 {\n      off_chain_reference_id: "123abc",\n}));\n\nlcs_metadata = lcs.serialize(metadata, Metadata);\n\n\n// receiver_signature is passed to the sender via the off-chain APIs as per\n// https://github.com/libra/lip/blob/master/lips/lip-1.mdx#recipient-signature\n\nprogram = encode_peer_to_peer_with_metadata_script(\n    "LBR" /*currency*/,\n    0x1234 /*recipient*/,\n    100 /*amount*/,\n    lcs_metadata,\n    receiver_signature);\n\nRawTransaction {\n    sender_account: 0x7777,\n    program: program,\n}\n')))}d.isMDXComponent=!0},199:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(a),b=n,p=u["".concat(i,".").concat(b)]||u[b]||h[b]||s;return a?r.a.createElement(p,o({ref:t},l,{components:a})):r.a.createElement(p,o({ref:t},l))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);