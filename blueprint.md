# **Mirror Muse Project Blueprint**

## **Overview**
Mirror Muse is a K-Beauty Resemblance Studio that analyzes a user's facial features to find their closest K-pop muse match. It provides personalized cosmetic recommendations and makeup tutorials based on the matched muse's signature look.

## **Project Features & Design**
- **Facial Analysis:** Uses `face-api.js` to detect facial landmarks and calculate ratios.
- **Muse Matching:** Compares user features against a roster of 200 K-pop artists.
- **Personalized Recommendations:** Suggests cosmetics and styles tailored to the specific face shape and vibe.
- **Tutorial Integration:** Links to popular YouTube tutorials for each recommended makeup area.
- **Responsive Design:** Mobile-first, elegant UI with modern CSS features (Container Queries, Cascade Layers, etc.).
- **Privacy Focused:** All analysis is performed locally in the browser; no images are sent to a server.

## **Current Task: Automatic Language Detection**
The goal is to implement automatic browser language detection, defaulting to English, while allowing users to switch languages manually.

### **Plan & Steps**
1.  **I18N System Optimization:**
    - Refine the `I18N` object in `main.js` to ensure comprehensive coverage of all UI text.
    - Implement a robust `setLanguage` function that updates elements with `data-i18n` attributes.
2.  **HTML Refactoring:**
    - Update `index.html` to include `data-i18n` attributes on all translatable text nodes.
    - Replace the inline script in `index.html` with a link to `main.js`.
    - Add a language selector `<select>` in the header for manual overrides.
3.  **Language Detection Logic:**
    - Use `navigator.language` to detect the user's preferred language.
    - Default to English (`'en'`) if the detected language is not supported or if detection fails.
    - Store the language preference in `localStorage` for persistence.
4.  **Verification:**
    - Test the automatic detection by changing browser language settings (simulated).
    - Verify that all UI elements update correctly when the language is changed.
