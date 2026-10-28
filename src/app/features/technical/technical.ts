import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ACCESSORIES,
  DESIGN_CODES,
  ENGINEERING_TOOLS,
  FRAME_TYPES,
  PANEL_SYSTEMS,
} from '../../core/site.data';
import { CtaBand } from '../../shared/cta-band';
import { Icon } from '../../shared/icon';
import { PageHero } from '../../shared/page-hero';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-technical',
  imports: [RouterLink, PageHero, Icon, CtaBand, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './technical.html',
})
export class TechnicalPage {
  protected readonly tools = ENGINEERING_TOOLS;
  protected readonly codes = DESIGN_CODES;
  protected readonly frames = FRAME_TYPES;
  protected readonly panels = PANEL_SYSTEMS;
  protected readonly accessories = ACCESSORIES;

  protected readonly sectionLinks = [
    { id: 'engineering', label: 'Engineering & detailing' },
    { id: 'structural-systems', label: 'Structural systems' },
    { id: 'panels', label: 'Roof & wall panels' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'insulation', label: 'Insulation & thermal' },
    { id: 'quality', label: 'Quality & testing' },
  ];

  protected readonly panelSpecs = [
    {
      id: 'roof',
      title: 'Insulated roof panels',
      image: 'assets/img/dw-roof-panel.webp',
      note: 'Concealed-fix roof construction with a factory-bonded insulated core and profiled weather lap.',
      specs: [
        { key: 'Thickness range', value: '30 mm – 100 mm' },
        { key: 'Module width', value: '1000 mm' },
        { key: 'Core options', value: 'PUF / PIR / EPS / Rockwool' },
        { key: 'Facing', value: 'Pre-painted Galvalume steel' },
        { key: 'Fixing', value: 'Concealed clips / through-fastened' },
      ],
    },
    {
      id: 'wall',
      title: 'Insulated wall panels',
      image: 'assets/img/dw-wall-panel.webp',
      note: 'Tongue-and-groove wall panels for warehouses, clean areas and cold-room envelopes.',
      specs: [
        { key: 'Thickness range', value: '40 mm – 150 mm' },
        { key: 'Module width', value: '1000 mm' },
        { key: 'Core options', value: 'PUF / PIR / EPS / Rockwool' },
        { key: 'Profiles', value: 'Micro-rib, flat, linear' },
        { key: 'Joint', value: 'Tongue & groove with sealant' },
      ],
    },
  ];

  protected readonly structuralSpecs = [
    { key: 'Primary framing', value: 'Built-up I-sections fabricated from MS plates' },
    { key: 'Secondary members', value: 'Cold-formed Z & C purlins and girts' },
    { key: 'Roof slope', value: 'Typically 1:10, project specific' },
    { key: 'Connection type', value: 'Bolted field connections, welded shop connections' },
    { key: 'Surface protection', value: 'Shop-applied primer with site touch-up' },
    { key: 'Design life', value: 'Engineered to the specified design life and environment' },
  ];

  protected readonly qualityChecks = [
    {
      title: 'Material traceability',
      description: 'Heat numbers and test certificates co-related to members and batches.',
    },
    {
      title: 'Weld inspection',
      description: 'Visual and dimensional checks at defined hold points, with NDT where specified.',
    },
    {
      title: 'Dimensional control',
      description: 'Member lengths, hole positions and frame geometry checked against shop drawings.',
    },
    {
      title: 'Pre-delivery checks',
      description: 'Panel quantities, flashings and accessories verified against the packing list.',
    },
  ];

  protected readonly insulation = [
    {
      name: 'PUF',
      full: 'Polyurethane foam',
      description: 'Highest thermal resistance per millimetre — preferred for cold rooms and freezer envelopes.',
    },
    {
      name: 'PIR',
      full: 'Polyisocyanurate',
      description: 'Thermal performance close to PUF with improved fire behaviour for industrial envelopes.',
    },
    {
      name: 'EPS',
      full: 'Expanded polystyrene',
      description: 'Cost-effective insulation for moderate temperature control in wall and roof panels.',
    },
    {
      name: 'Rockwool',
      full: 'Mineral wool',
      description: 'Non-combustible core for fire-rated walls, plant rooms and acoustic applications.',
    },
  ];
}
