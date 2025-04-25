# Technical Writing Style Guide

## 1. Tone and Voice
Our technical writing should strike a balance between being **direct, action-oriented, and conversational**. This ensures clarity while maintaining engagement.

- **Direct:** Use clear and concise language to eliminate ambiguity.
- **Action-Oriented:** Lead with the action first whenever possible. Use active voice and imperative statements to guide users efficiently.
- **Conversational:** Maintain a friendly but professional tone. Avoid jargon where possible and explain technical terms when necessary.

### Examples:
✅ *Click the **Submit** button to finalize your request.*  
✅ *To finalize your request, click the **Submit** button.*  
❌ *The "Submit" button should be clicked in order to finalize the request.*

## 2. Headers and Titles
Headers should be structured logically and consistently to improve readability and navigation.

- **Use sentence case** for headings (e.g., "How to reset your password" instead of "HOW TO RESET YOUR PASSWORD").
- **Keep them concise** while clearly describing the section’s content.
- **Use hierarchical structure:**
  - `#` H1: Main topic (Page or document title)
  - `##` H2: Major sections
  - `###` H3: Subsections
  - `####` H4: Detailed subtopics

If a section contains subsections, provide a short description under the main header to introduce what the subsections cover.

## 3. Information Mapping Methodology
Follow Information Mapping principles to structure content in a way that enhances clarity and usability.

- **Chunking:** Break content into small, digestible units to improve readability.
- **Labeling:** Use clear, descriptive headings to make information easy to find.
- **Relevance:** Only include necessary information to avoid cognitive overload.
- **Consistency:** Apply uniform formatting, terminology, and organization across documents.
- **Modular Writing:** Structure content into reusable, standalone sections for easy updates and repurposing.
- **Use of Information Types:** Classify content into specific categories such as procedures, concepts, principles, facts, and structures to enhance comprehension.
- **Parallel Structure:** Ensure related sections follow a consistent pattern to make scanning easier for users.
- **Keep paragraphs short (2 to 3 sentences)** to improve readability and comprehension.
- **Limit steps, stages, and lists to 7 ± 2 items (5 to 9 items)** to align with cognitive load best practices.
- **Sentence Length:** Limit most sentences to 30 words or fewer.
- **Line Length:** Limit lines of text to 50–75 characters to improve readability.

 ### Example of Modular Writing:
 Instead of writing long paragraphs, structure content into clearly defined blocks:
 
 **Before (Unstructured):**
 
 "To reset your password, go to the login screen. Click on the 'Forgot Password' link. Enter your registered email address and submit the form. Check your email for the reset link and follow the instructions provided."
 
 **After (Structured & Modular):**
 
 #### Resetting Your Password
 1. Go to the login screen.
 2. Click **Forgot Password**.
 3. Enter your registered email address.
 4. Click **Submit**.
 5. Check your email for the reset link.
 6. Follow the instructions in the email to reset your password.

## 4. Breaking Information into Separate Parts
To improve clarity, categorize content into distinct information types. The following table outlines how to structure different types of information:

| Reader Question to Answer | IM Type to Use | Present With |
|--------------------------|---------------|--------------|
| How do I do something? | Procedure | - Step/Action table  <br>- If/Then table |
| What is happening? <br> How does something work? | Process | - Stage/Description table  <br>- When/Then table |
| What does something look like? <br> What are its parts? (image) | Structure | - Part/Function table  <br>- Part/Description table |
| What should I do or not do? (rules, guidelines, policies) | Principle | - Text  <br>- Bulleted/Numbered list  <br>- Table  <br>- Visual |
| What is something? (definition) | Concept | - Text  <br>- Bulleted/Numbered list  <br>- Table  <br>- Visual |
| What are the facts? | Fact | - Text  <br>- Bulleted/Numbered list  <br>- Table  <br>- Visual |

## 5. Using Stem Sentences and Section Introductions

- **Stem Sentences:** Before lists, tables, procedures, and screenshots, provide a short introductory sentence that sets context.

  **Example for a list:**
  > "The following options are available for setting a reminder:"

  **Example for a procedure:**
  > "Follow these steps to create a new user account:"

  **Example for a table:**
  > "The following table summarizes the available rate types:"

- **Section Introductions:** When a section contains subsections, add a brief introductory paragraph under the section header to explain what the reader will find.

  **Example:**
  > "There are several types of rates available depending on your product selection. This section provides an overview of each type."

## 6. Documenting Procedures for UI Steps

### Procedure Templates
Use this format to document UI steps:

---

## 1. Action List Format (Preferred for Short Procedures)

Use this format for procedures involving simple clicks, selections, or form submissions.

**Template:**

### [Procedure Name]  
Follow these steps to [brief purpose of the task]:

- [Action command] **[UI Element or menu path]**  
- [Action command] **[button/icon/menu item]**  
- Enter the following:  
  - **[Field name]**: [Instruction]  
- [Action command] **[e.g., Update]**  
- [Action command] **[e.g., Save]**

**Result:**  
[Brief description of the result in present tense].

**Example:**

### Update Your Profile Information  
Follow these steps to update your profile:

- Click **Profile** in the top navigation bar.  
- Select **Edit Profile**  
- Enter the following:  
  - **First Name**: Enter your legal first name.  
  - **Last Name**: Enter your legal last name.  
  - **Phone Number**: Enter your primary contact number.  
- Click **Update**  
- Click **Save**

**Result:**  
Your profile updates and displays the new information.

---

## 2. Step/Action Table Format (Preferred for Complex Data Entry)

Use a Step/Action table when users must complete several fields or actions and a table format improves readability.

**Template:**

| Step | Action |
|------|--------|
| 1    | Click **[Menu option]** |
| 2    | Select **[Sub-option]** |
| 3    | Enter the following:<br>- **[Field 1]**: [Instruction]<br>- **[Field 2]**: [Instruction] |
| 4    | Click **[Submit/Save/Finish]** |
| 5    | Review the confirmation message |

**Result:**  
[Brief description of the outcome].

**Example:**

| Step | Action |
|------|--------|
| 1    | Click **Settings** in the dashboard |
| 2    | Select **Notification Preferences** |
| 3    | Enter the following:<br>- **Email Address**: Enter your preferred email<br>- **Phone Number**: Enter your mobile number |
| 4    | Click **Save Changes** |
| 5    | Review the confirmation banner at the top of the page |

**Result:**  
Your updated notification settings are saved.


## 7. Bullets and Numbering
Bulleted and numbered lists make content easier to scan and follow.

- **Use bulleted lists** for non-sequential items.
- **Use numbered lists** when steps must be followed in order.
- **Keep list items parallel** in structure (e.g., start each item with a verb if they are action steps).

### Examples:
 #### Bulleted List (Features of the App):
 - Dark mode for better visibility
 - Multi-user support
 - Offline access
 
 #### Numbered List (Steps to Install the Software):
 1. Download the installer from the website.
 2. Open the downloaded file.
 3. Follow the on-screen instructions to complete installation.

## 8. Screenshots and Images
Visuals enhance comprehension and engagement. Follow these guidelines:

- **Use high-quality, clear screenshots.**
- **Crop images** to show only the relevant section.
- **Add annotations** (arrows, boxes, highlights) when necessary.
- **Provide alternative text (alt text)** for accessibility.
- **Place images near relevant instructions** to maintain flow.
- **Lead with a description:** Introduce the screenshot with a description.

**Example for a screenshot:**
> **Screenshot:**  
> The screenshot below shows the **Program** button in Solutions Too.
>
> ![Program button screenshot]

### When to Use Screenshots:
- When illustrating a complex or non-intuitive user interface.
- When showing step-by-step navigation through menus or settings.
- When a visual reference improves understanding significantly.

### When Not to Use Screenshots:
- When the interface is likely to change frequently, leading to outdated images.
- When a simple text description is clearer and more efficient.
- When excessive screenshots would clutter the document and reduce readability.

## 9. Accessibility Guidelines
Make content accessible to all users, including those using screen readers, keyboard navigation, or assistive technologies.

### Visual Clarity
- **Color contrast:** Ensure strong contrast between text and background for readability.  
- **Don't rely on color alone:** Use labels, icons, or text to convey meaning—not just color.  
- **Readable fonts:** Use clear sans-serif fonts; avoid tiny or decorative fonts.  
- **Avoid dense blocks of text:** Use headings, bullets, and white space to improve scannability.

### Images and Media
- **Alt text:** Add meaningful alt text for all images, diagrams, and icons.  
- **Minimal text in images:** Don’t embed important information in images—write it out in the body text.  
- **Captions and labels:** Include captions for charts and graphs, and use text or symbols for color-coded elements.

### Screen Reader Compatibility
- **Use real headings:** Structure content using Markdown headings (`#`, `##`, `###`) instead of bolded text.  
- **Descriptive links:** Use specific link text like “Read the accessibility guide” instead of “Click here.”  
- **Avoid vague references:** Be clear—don’t reference things by location or color alone (e.g., say “Select the **Delete** button” instead of “Click the red button”).

### Keyboard and Interactive Content
- **Keyboard navigation:** Ensure users can access all interactive elements using just a keyboard.  
- **ARIA attributes (if web-based):** Use ARIA labels and roles to describe the purpose of UI elements when needed.

## 10. Grammar and Style Guidelines (Microsoft Manual of Style + CMOS)
To maintain consistency, follow these grammar and style rules:

- **Use active voice** (e.g., "Restart the application" instead of "The application should be restarted").
- **Write in the second person** (e.g., "You can update your profile by...").
- **Avoid unnecessary words** (e.g., "in order to" → "to").
- **Use consistent terminology** (refer to the same features and actions the same way across documents).
- **Spell out acronyms on first use** (e.g., "Single Sign-On (SSO)").
- **Use bold text for UI elements** such as button names, window titles, and menu options (e.g., "Click **File** and then select **Save As**").
- **Use italics for user input** when indicating text that a user must type into a field (e.g., "Enter *password123* in the password field").
- **Use plain language:**
  - Avoid technical jargon unless necessary.
  - Use simple and common words where possible.
  - Write short, clear, and direct sentences.
- **Avoid future tense:** Use present tense when possible (e.g., "The system displays a message" instead of "The system will display a message").
- **Error messages should be clear and constructive:**
  - Tell the user what happened.
  - Explain what they can do next.
  - Use friendly, non-alarmist language.
  **Example:** 
  ✅ "Invalid password. Try again or reset your password."
  ❌ "Password entry failure. Please rectify error."

### Grammar Rules (CMOS-Informed)

- **Subject-verb agreement:** Ensure subjects and verbs agree in number.  
  - Correct: "The list of items **is** on the desk."  
  - Incorrect: "The list of items **are** on the desk."

- **Pronoun-antecedent agreement:** Pronouns must match their antecedents in number and gender.  
  - Correct: "Each team member submitted **his or her** report."  
  - Incorrect: "Each team member submitted **their** report."

- **Modifier placement:** Place modifiers near the words they modify to avoid ambiguity.  
  - Correct: "She **only discussed** the first chapter."  
  - Incorrect: "She discussed **only** the first chapter."

- **Parallel structure:** Use consistent grammatical patterns for related ideas.  
  - Correct: "The system is fast, reliable, and easy to use."  
  - Incorrect: "The system is fast, reliable, and it is easy to use."

- **Use of commas:** Use the Oxford comma for clarity in lists.  
  - Correct: "The software is compatible with Windows, macOS, and Linux."  
  - Incorrect: "The software is compatible with Windows, macOS and Linux."

- **Hyphenation:** Use hyphens in compound adjectives before nouns.  
  - Correct: "User-friendly interface"  
  - Incorrect: "User friendly interface"

- **Capitalization:** Capitalize proper nouns, product names, trademarks, and official titles.  
  - Correct: "Microsoft Excel"  
  - Incorrect: "microsoft excel"

- **Abbreviations and acronyms:** On first use, spell out the term and include the abbreviation in parentheses.  
  - Correct: "Content Management System (CMS)"  
  - Incorrect: "CMS (Content Management System)"

- **Punctuation (CMOS Guidelines):**
  - Use the Oxford comma in lists.
  - Hyphenate compound adjectives before nouns (e.g., "user-friendly interface").
  - Periods and commas go inside quotation marks.

---

# Pre-Publishing Checklist

Before publishing your document, check the following:

- [ ] Tone is direct, action-oriented, and conversational.
- [ ] Headers follow logical structure and use sentence case.
- [ ] Information is broken into small, labeled chunks.
- [ ] Sentence length is under 30 words.
- [ ] Line length is between 50–75 characters.
- [ ] Procedures lead with the action first.
- [ ] Lists, tables, procedures, and screenshots have a stem sentence.
- [ ] Sections with subsections have an introductory description.
- [ ] Bulleted and numbered lists use parallel structure.
- [ ] Screenshots are clear, annotated if needed, and introduced with descriptions.
- [ ] Accessibility guidelines are followed (contrast, alt text, descriptive links).
- [ ] Grammar and punctuation follow Microsoft Manual of Style and CMOS.
- [ ] Acronyms are spelled out on first use.
- [ ] UI elements are bolded, and user input is italicized.
- [ ] Error messages are clear and helpful.

---

Following these guidelines ensures that technical documentation remains clear, consistent, user-friendly, accessible, and aligned with industry best practices.
