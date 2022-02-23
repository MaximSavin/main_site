<script setup>
const emit = defineEmits(['toggleShow'])
</script>

<template>
  <div id="choose-account" class="uk-flex-top uk-modal-container uk-modal-container-medium" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical">
      <button class="uk-modal-close-default" type="button" uk-close></button>

      <div class="uk-modal-body">
        <div class="uk-grid uk-grid-xmedium" uk-grid>
          <div class="uk-width-1-1">
            <h3>Ваши игровые аккаунты</h3>
          </div>
          <div class="uk-width-1-1 uk-margin-small-top">
            <table class="uk-table uk-table-accounts">
              <thead>
                <tr>
                  <th class="uk-table-expand">Раса</th>
                  <th class="uk-table-expand">Никнейм</th>
                  <th class="uk-table-expand">Галактика</th>
                  <th class="uk-width-small uk-text-right">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="uk-table-expand uk-text-light">
                    <img src="@/assets/images/blockchain-minter.svg" class="table-icon" />
                    Minter
                  </td>
                  <td class="uk-width-expand uk-text-light">JohnyB</td>
                  <td class="uk-width-expand uk-text-light">Minter</td>
                  <td class="uk-width-small uk-text-right">
                    <a href="#" class="uk-button uk-button-green uk-button-small">Выбрать</a>
                  </td>
                </tr>
                <tr>
                  <td class="uk-table-expand uk-text-light">
                    <img src="@/assets/images/blockchain-everscale.svg" class="table-icon" />
                    Everscale
                  </td>
                  <td class="uk-table-expand uk-text-light">JohnyB</td>
                  <td class="uk-table-expand uk-text-light">Everscale</td>
                  <td class="uk-width-small uk-text-right">
                    <a href="#" class="uk-button uk-button-green uk-button-small">Выбрать</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="uk-width-1-1 uk-margin-small-top">
            <a href="#choose-rase" class="uk-button uk-button-blue uk-width-auto@s uk-width-1-1" uk-toggle
              >Играть за новую расу</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
