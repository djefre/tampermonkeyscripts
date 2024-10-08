// ==UserScript==
// @name         BrancheAutoNamer3000
// @namespace    null
// @version      0.1
// @description  AutoGenerates the branchename for ya
// @author       Jeff
// @match        https://dev.azure.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(()=>{
        console.log('RUNNING SCRIPT...')
        let workItemIsOpen = false
        setInterval(() => {
            workItemIsOpen = window.location.href.indexOf('?workitem=') > -1
            if(workItemIsOpen){
                let backLogItemNumber = document.querySelector('.workitemcontrol span').innerHTML
                let backLogItemTitle = (document.querySelector('[id^="witc_"] input').value).replace(/ /g, '_')
                let inputTitle = backLogItemNumber + '_' + backLogItemTitle

                // let createBrancheButton = Array.from(document.querySelectorAll('[class^="root-"]'))[4]
                let developmentComponent = document.querySelector('.links-control-container')
                let developmentComponentButtons = Array.from(document.querySelectorAll('.zero-data-action div:nth-child(2) button'))
                let buttonsCount = developmentComponentButtons.length
                let createBrancheButton = developmentComponentButtons[buttonsCount - 1]

                createBrancheButton.addEventListener('click', () => {
                    console.log('RUNNING SCRIPT 2')
                    setTimeout(() => {
                        console.log('RUNNING')
                        // find input element
                        let brancheNameInput = document.querySelector('[id^="branchName"]')
                        if(brancheNameInput){
                            brancheNameInput.value = inputTitle
                        }
                    }, 2000)
                })
            }
        }, 500)
    }, 5000)
})();
