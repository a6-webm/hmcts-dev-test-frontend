# HMCTS Dev Test Frontend
# Run instructions
1) `yarn install`
2) `yarn webpack`
3) `yarn start:dev` or navigate to package.json and run the script manually

Note, you may need to copy `i18n.njk` from an existing `govuk-frontend` install to `src/main/views/govuk/macros/i18n.njk`, and rename the defined macro inside to match the macro in `govukDateInput.njk`.
